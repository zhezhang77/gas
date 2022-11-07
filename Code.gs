function Output(strLog)
{
  Logger.log(strLog);
}

function OutputWithTag(strTag, strLog)
{
  Logger.log(`[${strTag}] ${strLog}`);
}

function Info(strLog)
{
  OutputWithTag("Info", strLog);
}

function Debug(strLog)
{
  OutputWithTag("Debug", strLog);
}

function Error(strLog)
{
  OutputWithTag("Error", strLog);
}

function GetFirestore(firestore_info)
{
  return FirestoreApp.getFirestore(firestore_info.client_email, firestore_info.private_key, firestore_info.project_id);
}

function GetDatabaseByUrl(url)
{
  var token = ScriptApp.getOAuthToken();
  return FirebaseApp.getDatabaseByUrl(url, token);
}