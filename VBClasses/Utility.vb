Imports System.Web.Configuration

Public Class Utility
    Public Shared Function GetConfigValue(ByVal key As String) As String
        'Development, Test, Pre-Prod, Production
        Dim env As String = ConfigurationManager.AppSettings("WA.LNI.DEPLOYMENT.ENVIRONMENT").ToString

        Return ConfigurationManager.AppSettings(key + "-" + env).ToString

    End Function
End Class
