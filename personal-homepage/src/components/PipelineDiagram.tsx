import React, { useMemo, useEffect } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  Handle,
  Position,
  useReactFlow,
} from 'reactflow';
import type { Node, Edge, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';
import './PipelineDiagram.css';

// Custom node types
const InputNode = ({ data }: { data: { label: string } }) => (
  <div className="input-node">
    <Handle type="source" position={Position.Right} />
    {data.label}
  </div>
);

const AudioPipelineNode = ({ data }: { data: { label: string; subtitle?: string } }) => (
  <div className="audio-pipeline-node">
    <Handle type="target" position={Position.Left} />
    <Handle type="source" position={Position.Right} />
    <div>{data.label}</div>
    {data.subtitle && <div className="node-subtitle">{data.subtitle}</div>}
  </div>
);

const VideoPipelineNode = ({ data }: { data: { label: string; subtitle?: string } }) => (
  <div className="video-pipeline-node">
    <Handle type="target" position={Position.Left} />
    <Handle type="source" position={Position.Right} />
    <div>{data.label}</div>
    {data.subtitle && <div className="node-subtitle">{data.subtitle}</div>}
  </div>
);

const LatentSyncNode = ({ data }: { data: { label: string; subtitle?: string } }) => (
  <div className="latent-sync-node">
    <Handle type="target" position={Position.Left} />
    <Handle type="source" position={Position.Right} />
    <div>{data.label}</div>
    {data.subtitle && <div className="node-subtitle">{data.subtitle}</div>}
  </div>
);

const OutputNode = ({ data }: { data: { label: string } }) => (
  <div className="output-node">
    <Handle type="target" position={Position.Left} />
    {data.label}
  </div>
);

// Define nodeTypes outside component to avoid recreation
const nodeTypes: NodeTypes = {
  input: InputNode,
  audioPipeline: AudioPipelineNode,
  videoPipeline: VideoPipelineNode,
  latentSync: LatentSyncNode,
  output: OutputNode,
};

// Internal component to use useReactFlow hook
const PipelineDiagramContent: React.FC = () => {
  const { fitView } = useReactFlow();

  useEffect(() => {
    // Auto-fit view on mount
    setTimeout(() => {
      fitView({ padding: 0.1, duration: 800 });
    }, 100);
  }, [fitView]);

  return (
    <>
      <Background variant={BackgroundVariant.Dots} />
      <Controls />
    </>
  );
};

const PipelineDiagram: React.FC = () => {
  const nodes: Node[] = useMemo(() => [
    // Input nodes
    {
      id: 'input-audio',
      type: 'input',
      position: { x: 50, y: 50 },
      data: { label: 'Input Audio' },
    },
    {
      id: 'input-video',
      type: 'input',
      position: { x: 50, y: 200 },
      data: { label: 'Input Video' },
    },
    
    // Audio pipeline
    {
      id: 'asr',
      type: 'audioPipeline',
      position: { x: 300, y: 50 },
      data: { label: 'ASR' },
    },
    {
      id: 'translate',
      type: 'audioPipeline',
      position: { x: 500, y: 50 },
      data: { label: 'Translate' },
    },
    {
      id: 'tts',
      type: 'audioPipeline',
      position: { x: 700, y: 50 },
      data: { label: 'TTS' },
    },
    
    // Video preprocessing module
    {
      id: 'face-detection',
      type: 'videoPipeline',
      position: { x: 300, y: 150 },
      data: { label: 'Face Detection' },
    },
    {
      id: 'region-identification',
      type: 'videoPipeline',
      position: { x: 300, y: 250 },
      data: { label: 'Region Identification' },
    },
    {
      id: 'crop-affine',
      type: 'videoPipeline',
      position: { x: 300, y: 350 },
      data: { label: 'Crop + Affine Transform' },
    },
    
    // LatentSync core (simplified)
    {
      id: 'latentsync',
      type: 'latentSync',
      position: { x: 600, y: 300 },
      data: { label: 'LatentSync', subtitle: 'Lip Synchronization' },
    },
    
    // Post-processing
    {
      id: 'inverse-affine',
      type: 'videoPipeline',
      position: { x: 900, y: 300 },
      data: { label: 'Inverse Affine Transform' },
    },
    
    // Output nodes
    {
      id: 'output-audio',
      type: 'output',
      position: { x: 1200, y: 50 },
      data: { label: 'Output Audio' },
    },
    {
      id: 'output-video',
      type: 'output',
      position: { x: 1200, y: 300 },
      data: { label: 'Output Video' },
    },
  ], []);

  const edges: Edge[] = useMemo(() => [
    // Input to first processing
    { 
      id: 'input-audio-asr', 
      source: 'input-audio', 
      target: 'asr',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#2196f3', strokeWidth: 2 }
    },
    { 
      id: 'input-video-mouth', 
      source: 'input-video', 
      target: 'mouth-detection',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#9c27b0', strokeWidth: 2 }
    },
    
    // Audio pipeline
    { 
      id: 'asr-translate', 
      source: 'asr', 
      target: 'translate',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#ff9800', strokeWidth: 2 }
    },
    { 
      id: 'translate-tts', 
      source: 'translate', 
      target: 'tts',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#ff9800', strokeWidth: 2 }
    },
    { 
      id: 'tts-audio-features', 
      source: 'tts', 
      target: 'latentsync',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#ff9800', strokeWidth: 3 }
    },
    
    // Video preprocessing pipeline
    { 
      id: 'input-face-detection', 
      source: 'input-video', 
      target: 'face-detection',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#9c27b0', strokeWidth: 2 }
    },
    { 
      id: 'face-region', 
      source: 'face-detection', 
      target: 'region-identification',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#9c27b0', strokeWidth: 2 }
    },
    { 
      id: 'region-crop', 
      source: 'region-identification', 
      target: 'crop-affine',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#9c27b0', strokeWidth: 2 }
    },
    
    // Convergence to LatentSync
    { 
      id: 'crop-latentsync', 
      source: 'crop-affine', 
      target: 'latentsync',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#9c27b0', strokeWidth: 3 }
    },
    
    // Outputs
    { 
      id: 'tts-output-audio', 
      source: 'tts', 
      target: 'output-audio',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#4caf50', strokeWidth: 2 }
    },
    { 
      id: 'latentsync-inverse', 
      source: 'latentsync', 
      target: 'inverse-affine',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#9c27b0', strokeWidth: 2 }
    },
    { 
      id: 'inverse-output-video', 
      source: 'inverse-affine', 
      target: 'output-video',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#4caf50', strokeWidth: 2 }
    },
  ], []);

  return (
    <div className="pipeline-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.1, duration: 800 }}
      >
        <PipelineDiagramContent />
      </ReactFlow>
    </div>
  );
};

export default PipelineDiagram;

