@echo off
echo Compiling LaTeX resume...

REM Check if pdflatex is available
where pdflatex >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: pdflatex not found. Please install LaTeX (MiKTeX or TeX Live).
    pause
    exit /b 1
)

REM Compile the main resume
echo Compiling resume.tex...
pdflatex -interaction=nonstopmode resume.tex
if %errorlevel% neq 0 (
    echo Error: Failed to compile resume.tex
    pause
    exit /b 1
)

REM Compile the simple resume
echo Compiling resume_simple.tex...
pdflatex -interaction=nonstopmode resume_simple.tex
if %errorlevel% neq 0 (
    echo Error: Failed to compile resume_simple.tex
    pause
    exit /b 1
)

REM Clean up auxiliary files
echo Cleaning up auxiliary files...
del *.aux *.log *.out 2>nul

echo.
echo Compilation completed successfully!
echo Generated files:
echo - resume.pdf
echo - resume_simple.pdf
echo.
pause
