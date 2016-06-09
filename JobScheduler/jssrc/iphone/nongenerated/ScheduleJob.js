var KonyMain = java.import('com.konylabs.android.KonyMain');
var context = KonyMain.getActivityContext();
var Builder = java.import('android.app.job.JobInfo$Builder');
var ComponentName = java.import('android.content.ComponentName');
var JobInfo = java.import('android.app.job.JobInfo');
var LinkedList = new java.import('java.util.LinkedList');
var Message = new java.import('android.os.Message');
var ContextClass = java.import('android.content.Context');
var jobParamsMap = null;
var kJobId = 0;
var mServiceComponent = null;
var jobScheduler = context.getSystemService(ContextClass.JOB_SCHEDULER_SERVICE);
var jobIdArray = [];
var tmpScheduledJobID = [];
//var selectedJobId =null;
var deleteRow;
var urlsArray = ['http://www.colorado.edu/conflict/peace/download/peace_essay.ZIP', 'http://www.colorado.edu/conflict/peace/download/peace_example.ZIP', 'http://download.thinkbroadband.com/5MB.zip', 'http://download.thinkbroadband.com/20MB.zip', 'http://download.thinkbroadband.com/100MB.zip'];

function onFormPostShow() {
    var ComponentName = java.import('android.content.ComponentName');
    mServiceComponent = new ComponentName(context, getTestJobService().class);
    jobParamsMap = new LinkedList();
}

function scheduleJob() {
    if (frmScheduler.txtTimeDelay.text == null) {
        var basicProperties = {
            message: "Please enter Time delay.",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Empty Field",
            alertHandler: function() {}
        };
        kony.ui.Alert(basicProperties, {});
        return;
    }
    if (frmScheduler.txtDeadline.text == null) {
        var basicProperties = {
            message: "Please enter Time delay.",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Empty Field",
            alertHandler: function() {}
        };
        kony.ui.Alert(basicProperties, {});
        return;
    }
    kony.application.showLoadingScreen("loadskin", "Scheduling....", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    kony.print("\n--in scheduleJob-------");
    // var builder = new Builder(kJobId++, mServiceComponent);
    var builder = new Builder(kJobId++, mServiceComponent);
    kony.print("\nbuilder");
    var delay = frmScheduler.txtTimeDelay.text;
    customPrint("JSCHEDLE: delay " + delay);
    if (delay !== null && delay.length > 0) {
        builder.setMinimumLatency(parseInt(delay) * 1000);
    }
    var deadline = frmScheduler.txtDeadline.text;
    customPrint("JSCHEDLE: deadline " + deadline);
    if (deadline !== null && deadline.length > 0) {
        builder.setOverrideDeadline(parseInt(deadline) * 1000);
    }
    var connectKey = frmScheduler.rdbConnectivity.selectedKey;
    customPrint("JSCHEDLE: connectKey " + connectKey);
    if (connectKey == 'wifi') {
        builder.setRequiredNetworkType(JobInfo.NETWORK_TYPE_UNMETERED);
    } else if (connectKey == 'any') {
        builder.setRequiredNetworkType(JobInfo.NETWORK_TYPE_ANY);
    }
    var mRequiresIdleCheckboxArr = frmScheduler.chbxIdle.selectedKeys;
    var mRequiresChargingCheckBoxArr = frmScheduler.chbxCharging.selectedKeys;
    kony.print("\n clear");
    if (mRequiresIdleCheckboxArr) {
        customPrint("JSCHEDLE: mRequiresIdleCheckboxArr " + mRequiresIdleCheckboxArr[0]);
        builder.setRequiresDeviceIdle(true);
        /*
      if(mRequiresIdleCheckboxArr[0] == 'idleMode'){
       
       kony.print("**********ideal mode swelected*********************");
      //  builder.setRequiresDeviceIdle(mRequiresIdleCheckboxArr[0] == 'idleMode');
       builder.setRequiresDeviceIdle(true);
     }
      else{
        
        kony.print("**********ideal mode not seclected*********************");
      }
     */
    }
    if (mRequiresChargingCheckBoxArr) {
        customPrint("JSCHEDLE: mRequiresChargingCheckBoxArr " + mRequiresChargingCheckBoxArr[0]);
        ////////////////////////////////////////////////////////////////// 
        builder.setRequiresCharging(true);
        /*
        if(mRequiresChargingCheckBoxArr[0] == 'devReq'){
          kony.print("**********  required charging not selected*********************");
         //  builder.setRequiresCharging(mRequiresChargingCheckBoxArr[0] == 'devReq');
           builder.setRequiresCharging(true);
          
        }
        else{
          
          kony.print("**********  required charging not selected*********************");
        }
        */
    }
    var jobScheduler = context.getApplication().getSystemService(ContextClass.JOB_SCHEDULER_SERVICE);
    kony.print("\n---starting jobs" + JSON.stringify(builder));
    jobScheduler.schedule(builder.build());
}

function displayJobIds(currentJobId) {
    kony.print("\n-- displaying jobs--");
    tmpScheduledJobID = [];
    if (jobIdArray.length === 0) {
        //  frmJob.txtJobIds.text = 'No Jobs Running!!'
        frmScheduler.tabPaneScheduler.flxNoRunningJobs.setVisibility(true);
        frmScheduler.tabPaneScheduler.flxRunningJobs.setVisibility(false);
        kony.application.dismissLoadingScreen();
    } else {
        // frmScheduler.lblJobName.text = 'Running Job IDs\n';
        kony.application.dismissLoadingScreen();
        frmScheduler.tabPaneScheduler.flxNoRunningJobs.setVisibility(false);
        frmScheduler.tabPaneScheduler.flxRunningJobs.setVisibility(true);
        var jobText = "";
        for (var i = 0; i < jobIdArray.length; i++) {
            jobText = " " + jobText + jobIdArray[i] + "\n";
            tmpScheduledJobID.push({
                lblRunningJobName: "Job ID : " + jobIdArray[i],
                lblJobId: jobIdArray[i],
                lblRunningJobDesc: "The job is scheduled successfully with the preferred constraints by the user.",
                imgDelete: "trash.png"
            });
        }
        alert("Job scheduled sucessfully");
        // alert("running job id's :\n"+tmpScheduledJobID);
        //   frmScheduler.lblJobName.text = frmScheduler.lblJobName.text + jobText;
        frmScheduler.tabPaneScheduler.segRunningJobs.setData(tmpScheduledJobID);
    }
    customPrint("In Downloading" + currentJobId);
    if (currentJobId || currentJobId === 0) {
        customPrint("In Downloading");
        executeInMainThread(getURLToDownlad(), currentJobId, 3);
    }
}

function getURLToDownlad() {
    kony.print("\n----getURLToDownlad----");
    /*var wids = frmScheduler.widgets();
	//customPrint(JSON.stringify(wids))
  kony.print("\n got widgets--");
	for(var i = 0; i < wids.length; i++)
		customPrint(wids[i].id);
  kony.print("1");*/
    var urlKey = frmScheduler.tabPaneScheduler.listBoxConstraintsVaule1.selectedKey;
    //var urlKey='small';
    kony.print("\n----urlKey----" + JSON.stringify(urlKey));
    if (urlKey == 'small') return urlsArray[0];
    if (urlKey == 'medium') return urlsArray[1];
    if (urlKey == '5mb') return urlsArray[2];
    if (urlKey == '20mb') return urlsArray[3];
    if (urlKey == '100mb') return urlsArray[4];
    return null;
}

function cancelAllJobs() {
    jobScheduler.cancelAll();
}

function cancelJob() {
    var segment = frmScheduler.segRunningJobs.selectedRowIndex[0];
    var row = frmScheduler.segRunningJobs.selectedRowIndex[0];
    deleteRow = row;
    //alert("row index is "+row);
    var selectedJobId = parseInt(frmScheduler.segRunningJobs.selectedItems[0].lblJobId.text);
    var tmp = frmScheduler.segRunningJobs.selectedItems[0];
    kony.print("\nindex :----" + JSON.stringify(tmp));
    kony.print("\nselectedJobId :----" + JSON.stringify(selectedJobId));
    //alert("row index is "+selectedJobId);
    var jobId = selectedJobId;
    jobScheduler.cancel(jobId);
    customPrint("Job Killed Id: " + jobId);
}

function onReceivedStartJob() {}

function onReceivedStopJob() {}

function getTestJobService() {
    kony.print("\n--in getTestJobService--");
    var TestJobService = java.newClass('com.orgname.JobSchedulerTes123.TestJobService', 'android.app.job.JobService', [], {
        jobIdLocal: -1,
        onStartJob: function(params) {
            jobParamsMap.add(params);
            onReceivedStartJob(params);
            jobIdLocal = params.getJobId();
            jobIdArray.push(jobIdLocal);
            customPrint("######################## on start job: " + params.getJobId());
            displayJobIds(jobIdLocal);
            kony.application.dismissLoadingScreen();
            return true;
        },
        onCreate: function() {
            this.superonCreate();
            kony.application.dismissLoadingScreen();
            customPrint("######################## service created ###################");
        },
        onDestroy: function() {
            this.superonDestroy();
            jobIdArray.pop(jobIdLocal);
            //displayJobIds();
            //  frmScheduler.tabPaneScheduler.segRunningJobs.removeAt(deleteRow,0);
            kony.print("****************job stoped :********");
            kony.application.dismissLoadingScreen();
            customPrint("######################## service destroyed ###################" + jobIdLocal);
        },
        onStartCommand: function(intent, flags, startId) {
            customPrint("######################## onStartCommand ###################");
            var callback = intent.getParcelableExtra("messenger");
            var m = Message.obtain();
            m.what = KonyMain.MSG_SERVICE_OBJ;
            m.obj = this;
            try {
                callback.send(m);
            } catch (exe) {
                customPrint("########################Error passing service object back to activity.");
            }
            kony.application.dismissLoadingScreen();
            return this.START_NOT_STICKY;
        },
        onStopJob: function(params) {
            // Stop tracking these job parameters, as we've 'finished' executing.
            jobParamsMap.remove(params);
            jobIdArray.pop(params.getJobId());
            if (jobIdArray.length === 0) {
                frmScheduler.tabPaneScheduler.flxNoRunningJobs.setVisibility(true);
                frmScheduler.tabPaneScheduler.flxRunningJobs.setVisibility(false);
            }
            customPrint("######################## Stopped Job Id: " + params.getJobId());
            // displayJobIds();
            return true;
        }
    });
    return TestJobService;
    //var Builder = java.import('android.app.job.JobInfo$Builder');
    //var mBuilder = new Builder(1, mComponentName);
    //mBuilder.setOverrideDeadline(2000);
    //var ContextClass = java.import('android.content.Context');
    //jobScheduler.schedule(mBuilder.build());
}

function customPrint(msg) {
    kony.print("CTM## " + msg);
}

function cancel() {
    frmScheduler.tabPaneScheduler.txtTimeDelay.text = "";
    frmScheduler.tabPaneScheduler.txtDeadline.text = "";
}