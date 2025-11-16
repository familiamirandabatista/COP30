@echo off
TITLE Gerador de Escala (Servidor)

REM Muda o diretorio para a pasta onde este arquivo (.bat) esta localizado
cd /d %~dp0

echo =======================================================
echo.
echo    INICIANDO O SERVIDOR (npm run dev)...
echo    O navegador abrira em instantes.
echo.
echo =======================================================
npm run dev -- --open