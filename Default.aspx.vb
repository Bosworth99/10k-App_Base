Public Class _Default
    Inherits System.Web.UI.Page

    Public EWNBase As String

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        EWNBase = Utility.GetConfigValue("EWNBase")
    End Sub

End Class