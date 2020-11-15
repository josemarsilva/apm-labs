ECHO OFF
REM # #########################################################################
SET SCRIPT_NAME=win-cmd-curl-script-sanity-json-api-get.bat
SET SCRIPT_DESCRIPTION=Windows (.bat) script to Sanity Test a Json API application with GET
SET PARAM_REST_JSON_URL=http://localhost:3000/api/employees
SET PARAM_QTY_REQUEST=1000
SET "PARAM_JSON_POST_DATA={ "name": "Name ?", "salary": "?" }"
REM Observacoes: n/a
REM # #########################################################################

REM # #########################################################################
ECHO.
ECHO %SCRIPT_NAME% - %SCRIPT_DESCRIPTION%
ECHO Parametros:
ECHO   - URL     : %PARAM_REST_JSON_URL%
ECHO   - Requests: %PARAM_QTY_REQUEST%
ECHO   - Data    : %PARAM_JSON_POST_DATA%
ECHO.

REM # #########################################################################
SET BEGIN_DATE=%DATE%
SET BEGIN_TIME=%TIME%
ECHO Begin Date/Time: %BEGIN_DATE% %BEGIN_TIME%
ECHO.

REM # #########################################################################
FOR /L %%G in (1,1,%PARAM_QTY_REQUEST%) DO (
    ECHO  Request - # %%G
    curl --request GET %PARAM_REST_JSON_URL% --header "Content-Type: application/json" 
    SET CURL_DATA_TMP=%PARAM_JSON_POST_DATA%
    ECHO %CURL_DATA_TMP% > curl-data.tmp
    REM curl --request POST %PARAM_REST_JSON_URL% --data-raw  @curl-data.tmp
    ECHO.
    ECHO.
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
