''** Open the file
const forReading = 1
dim objFSO, objFile
set objFSO = createobject("Scripting.FileSystemObject")
set objFile = objFSO.openTextFile("package.json", ForReading)

''** Look for the variables we need
Name = ""
Version = ""
Drive = ""
Folder = ""
TargetServer = WScript.Arguments.Item(0)
TargetPrefix = WScript.Arguments.Item(1)

do until objFile.atEndOfStream
    ThisRow = objFile.ReadLine
    RowSplit = Split(ThisRow, ":", -1, 1)
    RowName = Trim(Replace(RowSplit(0), chr(34), "="))
    
    ''** it doesn't want to trim right, so using instr instead of direct compare
    If  Instr(RowName,"=name=") Then
        Name = Replace(Replace(Trim(RowSplit(1)), chr(34), ""), ",", "")
    ElseIf  Instr(RowName,"=version=") Then
        Version = Replace(Replace(Trim(RowSplit(1)), chr(34), ""), ",", "")
    ElseIf Instr(RowName,"=localDrive=") Then
        Drive = Replace(Replace(Trim(RowSplit(1)), chr(34), ""), ",", "")
    ElseIf Instr(RowName,"=folder=") Then
        Folder = Replace(Replace(Trim(RowSplit(1)), chr(34), ""), ",", "")
    End If
loop

''** done with the file now
objFile.close
set objFile = nothing
set objFSO = nothing

''** create a few variables
StringDate = Month(Date) & "-" & Day(Date) & "-" & Year(Date)
Source = "\\WADSVSS\Drop Points\" & Name & "\" & Year(Date) & "\" & Name & TargetPrefix & StringDate & "." & Version
Target = "\\lnixa-" & TargetServer & "\webcontent\" & Folder

''**edit the file
Set oWord = CreateObject("Word.Application")
Set oDoc = oWord.documents.Open(Drive & ":\dropNoticeTemplate.docx")
Set oWords = oDoc.Words
For word = 1 to oWords.Count
    If oWords.Item(word).Text = "sssNAMEsss" Then
        oWords.Item(word).Text = Replace(oWords.Item(word).Text, "sssNAMEsss", Name)
    ElseIf oWords.Item(word).Text = "sssDATEsss" Then
        oWords.Item(word).Text = Replace(oWords.Item(word).Text, "sssDATEsss", StringDate)
    ElseIf oWords.Item(word).Text = "sssVERSIONsss" Then
        oWords.Item(word).Text = Replace(oWords.Item(word).Text, "sssVERSIONsss", Version)
    ElseIf oWords.Item(word).Text = "sssSOURCEsss" Then
        oWords.Item(word).Text = Replace(oWords.Item(word).Text, "sssSOURCEsss", Source)
    ElseIf oWords.Item(word).Text = "sssTARGETsss" Then
        oWords.Item(word).Text = Replace(oWords.Item(word).Text, "sssTARGETsss", Target)
    End If
Next

''**save and close it
oDoc.SaveAs(Source & "\" & Name & TargetPrefix & StringDate & "." & Version & ".docx")
oDoc.Close
oWord.Quit
Set oDoc = Nothing
Set oWords = Nothing
Set oWord = Nothing

