<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
     <script type="text/javascript">
         var Type;
         var Url;
         var Data;
         var ContentType;
         var DataType;
         var ProcessData;
         //Generic function to call AXMX/WCF  Service        
         function CallService() {
             $.ajax({
                 type: Type, //GET or POST or PUT or DELETE verb
                 url: Url, // Location of the service
                 data: Data, //Data sent to server
                 contentType: ContentType, // content type sent to server
                 dataType: DataType, //Expected data format from server
                 processdata: ProcessData, //True or False
                 success: function(msg) {//On Successfull service call
                     ServiceSucceeded(msg);
                 },
                 error: ServiceFailed// When Service call fails
             });
         }
         //Fejl funktion
         function ServiceFailed(result) {
             alert('Service call failed: ' + result.status + '' + result.statusText);
             Type = null; Url = null; Data = null; ContentType = null; DataType = null; ProcessData = null;
         }

         //Sætter variavler og eksekverer CallService()
         function WCFJSON() {
             var uesrid = "3";
             Type = "POST";
             Url = "Service.svc/GetCoordinate";
             Data = '{"Id": ' + uesrid + '}';
             ContentType = "application/json; charset=utf-8";
             DataType = "json"; ProcessData = true; 
             CallService();
         }

         function ServiceSucceeded(result) {


             if (DataType == "json") {
                 var ll;
                 resultObject = result.GetCoordinateResult;
                
                 for (i = 0; i < resultObject.length; i++) {
                     //alert(resultObject[i]);
                     ll = resultObject[i];
                 }
                 mapCoordinates(ll)
             }
         
         }

         function ServiceFailed(xhr) {
             alert(xhr.responseText);
             if (xhr.responseText) {
                 var err = xhr.responseText;
                 if (err)
                     error(err);
                 else
                     error({ Message: "Unknown server error." })
             }
             return;
         }

         $(document).ready(
         function () {
             WCFJSON();

         });
         
         function mapCoordinates(ll) {
             var latlng = ll.split(",");
             console.log(latlng);
             var myLatlng = new google.maps.LatLng(latlng[0], latlng[1]);
             var mapOptions = {
                 zoom: 10,
                 center: myLatlng,
                 mapTypeId: google.maps.MapTypeId.ROADMAP
             }

             var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
             var marker = new google.maps.Marker({
                 position: myLatlng,
                 map: map,
                 title: 'Hello World!'
             });
         }


    </script>
    <style>
      html, body, #map-canvas {
        margin: 0px;
        padding: 0px;
        height:100%;
      }


    </style>
    

</head>


<body>

            <div id="map-canvas"></div>

</body>
</html>
