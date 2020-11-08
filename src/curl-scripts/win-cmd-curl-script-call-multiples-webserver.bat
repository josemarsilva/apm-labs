ECHO OFF
REM # #########################################################################
SET SCRIPT_NAME=win-cmd-curl-script-call-multiples-webserver.bat
SET SCRIPT_DESCRIPTION=Robo de Teste para *injetar* em paralelo multiplas requisicoes HTTP
SET PARAM_SCRIPT_CALLED=win-cmd-curl-script-webserver.bat
SET PARAM_QTY_THREADS=10
REM Observacoes: n/a
REM # #########################################################################

ECHO.
ECHO %SCRIPT_NAME% - %SCRIPT_DESCRIPTION%
ECHO Parametros:
ECHO   - URL     : %PARAM_SCRIPT_CALLED%
ECHO   - Requests: %PARAM_QTY_THREADS%
ECHO.

REM # #########################################################################
SET BEGIN_DATE=%DATE%
SET BEGIN_TIME=%TIME%
ECHO Begin Date/Time: %BEGIN_DATE% %BEGIN_TIME%
ECHO.

REM # #########################################################################
FOR /L %%G in (1,1,%PARAM_QTY_THREADS%) DO (
    ECHO  Thread # %%G
)

REM # #########################################################################
SET END_DATE=%DATE%
SET END_TIME=%TIME%
ECHO.
ECHO End Date/Time: %END_DATE% %END_TIME%
ECHO.

REM # #########################################################################
REM # #########################################################################
