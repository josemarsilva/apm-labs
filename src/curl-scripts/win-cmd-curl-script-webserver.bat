ECHO OFF
REM # #########################################################################
SET SCRIPT_NAME=win-cmd-curl-script-webserver.bat
SET SCRIPT_DESCRIPTION=Robo de Teste para *injetar* requisicoes HTTP web server
SET PARAM_HTTP_URL=http://localhost:3000
SET PARAM_QTY_REQUEST=100
REM Observacoes: n/a
REM # #########################################################################

REM # #########################################################################
ECHO.
ECHO %SCRIPT_NAME% - %SCRIPT_DESCRIPTION%
ECHO Parametros:
ECHO   - URL     : %PARAM_HTTP_URL%
ECHO   - Requests: %PARAM_QTY_REQUEST%
ECHO.

REM # #########################################################################
SET BEGIN_DATE=%DATE%
SET BEGIN_TIME=%TIME%
ECHO Begin Date/Time: %BEGIN_DATE% %BEGIN_TIME%
ECHO.

REM # #########################################################################
FOR /L %%G in (1,1,%PARAM_QTY_REQUEST%) DO (
    curl %PARAM_HTTP_URL%
    ECHO  - # %%G
)

REM # #########################################################################
ECHO.
SET END_DATE=%DATE%
SET END_TIME=%TIME%
ECHO End Date/Time: %END_DATE% %END_TIME%
ECHO.
ECHO Elapsed Date/Time and TPS (Transactions per seconds):
ECHO     ( %END_DATE% %END_TIME% - %BEGIN_DATE% %BEGIN_TIME% ) / %PARAM_QTY_REQUEST%
ECHO.

REM # #########################################################################
REM # #########################################################################
