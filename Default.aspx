<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="SMCUI2._Default" %>

<!DOCTYPE html>
<html>
<head runat="server">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>$appName$</title>

    <!--[if lte IE 8]>
        <script src="Javascript/vendor/flagOldIe.js"></script>
    <![endif]-->

    <!--[if lte IE 7]>
        <script type="text/javascript" src="Javascript/vendor/json2.js"></script>
    <![endif]--> 

</head>
<body>

    <script src="Javascript/app/appConfig.js"></script>
    <script controller="Javascript/index.js" src="<%=EWNBase%>/Javascript/ewnHeader.js"></script>

    <h1 class="pageTitle">$appName$</h1>
   
    <script src="<%=EWNBase%>/Javascript/ewnLegalFooter.js"></script>

</body>
</html>