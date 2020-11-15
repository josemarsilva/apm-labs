# #############################################################################
$scriptName = "powershell-script-sanity-json-api-get-post.ps1"
$scriptDescription = "PowerShell script to Sanity Test a Json API application with GET and POST" 
$paramRestJsonUrl = "http://localhost:3000/api/employees"
$paramQtyRequest = 1
$paramJsonPostData = '{ "name": "Name ?", "salary": "?" }'
# pre-requisites:
#              * Setup Powershell Execution Policy Unrestricted
#                - https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema
#                - https://go.microsoft.com/fwlink/?LinkID=135170.
#                + Run PowerShell as Administrator
#                  - Set-ExecutionPolicy Unrestricted
# source-code: https://github.com/josemarsilva/apm-labs
# references :
#              * https://stackoverflow.com/questions/40105458/how-to-use-the-curl-command-in-powershell
# #############################################################################
#

# Command line args list ...

for ( $i = 0; $i -lt $args.count; $i++ ) {
    # -qty <new-value>
    if($($args[$i]) -eq "-qty") {
        if ($args.count -gt $i) {
            if ($args[$i+1] -match "^\d+$") {
                $paramQtyRequest = [int]$($args[$i+1])
            }
        }
    }
} 

# Wellcome ...

Write-Host
Write-Host "$scriptName - $scriptDescription"
Write-Host "Parameters:"
Write-Host "  - url      : $paramRestJsonUrl"
Write-Host "  - qty      : $paramQtyRequest"
Write-Host "  - PostData : $paramJsonPostData"
Write-Host

# Setting-Up ...

$headersNone = @{ 
}
$headersAcceptApplicationJson = @{ 
    'accept'='application/json' 
}
$contentTypeApplicationJson = "application/json"
$contentTypeMultipartFormData = "multipart/form-data"
$contentTypeTextPlainUtf8 = "text/plain; charset=utf-8"
$paramConvertToJsonDepth = 10

# Starting  ...

$beginDateTime = Get-date -f ('yyyy-MM-dd HH:mm:ss')
Write-Host "Begin Date/Time: $beginDateTime"
Write-Host

# Loop iterator ...

Write-Host
for ($i=1; $i -le $paramQtyRequest; $i++)
{
    Write-Host "  GET ($i) ..."
    $response = Invoke-RestMethod -uri $paramRestJsonUrl -Headers $headersAcceptApplicationJson -contenttype $contentTypeApplicationJson -Method Get
    Write-Host ( $response | ConvertTo-Json -Depth $paramConvertToJsonDepth )
    Write-Host "  POST ($i) ..."
    $postData = $paramJsonPostData.Replace("?","$i")
    $response = Invoke-RestMethod -uri $paramRestJsonUrl -Headers $headersAcceptApplicationJson -contenttype $contentTypeApplicationJson -Method Post -Body $postData
    Write-Host ( $response | ConvertTo-Json -Depth $paramConvertToJsonDepth )
    Write-Host
}

# Finishing  ...

$endDateTime = Get-date -f ('yyyy-MM-dd HH:mm:ss')
Write-Host "End Date/Time: $beginDateTime"
Write-Host
Write-Host "Elapsed Date/Time and TPS (Transactions per seconds):"
Write-Host "  * Elapsed = ( $beginDateTime - $endDateTime )"
$elapsedNewTimeSpan = New-TimeSpan -Start $beginDateTime -End $endDateTime
Write-Host "  * Elapsed = $elapsedNewTimeSpan"
Write-Host "  * TPS = ( $paramQtyRequest / $elapsedNewTimeSpan )"
$tps = $paramQtyRequest / $elapsedNewTimeSpan.TotalSeconds
Write-Host "  * TPS = $tps"
Write-Host

# #############################################################################
# 
# #############################################################################
