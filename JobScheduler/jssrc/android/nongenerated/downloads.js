var KonyMain = java.import('com.konylabs.android.KonyMain');
var context = KonyMain.getActivityContext();
var MainContext = java.import('android.content.Context');
var Environment = java.import('android.os.Environment');
var Bundle = java.import('android.os.Bundle');
var Engine = java.import('android.speech.tts.TextToSpeech$Engine');
var Intent = java.import('android.content.Intent');
var IntentFilter = java.import('android.content.IntentFilter');
var NBuilder = java.import('android.support.v4.app.NotificationCompat$Builder');
var Notification = java.import('android.app.Notification');
var SearchManager = java.import('android.app.SearchManager');
var BufferedInputStream = java.import('java.io.BufferedInputStream');
var FileOutputStream = java.import('java.io.FileOutputStream');
var InputStream = java.import('java.io.InputStream');
var OutputStream = java.import('java.io.OutputStream');
var URL = java.import('java.net.URL');
var URLConnection = java.import('java.net.URLConnection');
var mProgressDialog = null;
var PROGRESS_ID = 1234;
var mNotifyManager = null;
var mBuilder = null;

function startDownload(fileUrl, saveFileName) {
    var args = [fileUrl, saveFileName, 3];
    kony.runOnMainThread(executeInMainThread, args);
}

function executeInMainThread(fileUrl, saveFileName, arg3) {
    // starting new Async Task
    // execute this when the downloader must be fired
    var fileArray = [fileUrl];
    var fileArrayJava = java.newArray('java.lang.String', fileArray);
    customPrint("DOWNLOAD 4" + fileArrayJava);
    var downloadTask = getClassOFDownload(saveFileName + ".zip");
    kony.print("\n--downloadTask--" + JSON.stringify(downloadTask));
    downloadTask.execute(fileArrayJava);
}

function getClassOFDownload(saveFileName) {
    /**
     * Background Async Task to download file
     * */
    kony.print("\n--getClassOFDownload");
    var DownloadFileFromURL = java.newClass('DownloadFileFromURL', 'android.os.AsyncTask', [], {
        /**
         * Before starting background thread
         * Show Progress Bar Dialog
         * */
        onPreExecute: function() {
            kony.print("\n--onPreExecute--");
        },
        /**
         * Downloading file in background thread
         * */
        doInBackground: function(f_url) {
            kony.print("\n--doInBackground--f_url" + f_url);
            var count;
            try {
                var url = new URL(f_url[0]);
                kony.print("1");
                var conection = url.openConnection();
                kony.print("2");
                conection.connect();
                kony.print("3");
                // this will be useful so that you can show a tipical 0-100% progress bar
                var lenghtOfFile = conection.getContentLength();
                kony.print("4");
                // download the file
                var input = new BufferedInputStream(url.openStream(), 8192);
                kony.print("5");
                // Output stream
                var jsData = [];
                kony.print("6");
                for (var i = 0; i < 1024; i++)
                jsData[i] = java.newByte(0);
                kony.print("7");
                var data = java.newArray('byte', jsData);
                kony.print("8");
                customPrint("DOWNLOAD 8 " + jsData);
                kony.print("9");
                var total = 0;
                kony.print("saveFileName:-" + saveFileName);
                var output;
                //  output = new FileOutputStream("/sdcard/"+saveFileName);
                try {
                    output = new FileOutputStream("/sdcard/" + saveFileName);
                } catch (exp) {
                    kony.print("exp" + JSON.stringify(exp));
                }
                // var output = new FileOutputStream("/"+saveFileName);
                kony.print("10");
                while ((count = input.read(data)) != -1) {
                    total += count;
                    // publishing the progress....
                    // After this onProgressUpdate will be called
                    //publishProgress("" + ((total * 100) / lenghtOfFile));
                    // writing data to file
                    output.write(data, 0, count);
                }
                kony.print("11");
                // flushing output
                output.flush();
                kony.print("12");
                // closing streams
                output.close();
                kony.print("13");
                input.close();
                kony.print("14");
            } catch (err) {
                customPrint("Error: ", err.getMessage());
            }
            return null;
        },
        /**
         * Updating progress bar
         * */
        onProgressUpdate: function(progress) {
            kony.print("\n--onProgressUpdate--");
        },
        /**
         * After completing background task
         * Dismiss the progress dialog
         * **/
        onPostExecute: function(fileUrl) {
            kony.print("\n--onPostExecute--");
        }
    });
    return new DownloadFileFromURL();
}