(function(window, undefined) {
  var dictionary = {
    "773dfcbc-40d0-4d0e-b74c-1e0dc272e746": "EVENTS_AND_SCHEDULE",
    "ebc458a3-b7e7-496f-a1d7-222f102fe06f": "hoboken_bus_details",
    "c3cda023-065b-4155-abd7-29539bb73925": "EVENTS DETAILS",
    "5a57502a-7486-43f3-a310-270ea409afe5": "MAP_Details",
    "a9a8bfc3-b26a-45df-ace9-38e165b28e1e": "LANDMARK",
    "f5334354-fc72-46ae-91c6-62be5a840f8a": "campus_map_new",
    "bf717fdd-db9a-4c9f-9f6a-366889726e45": "CONTACT_US",
    "a609b67a-5e12-4467-b672-f57297589727": "Department_details",
    "ce8297fa-d5d5-416b-bc8c-6bc2a777f209": "shuttle_schedule_details",
    "1848c802-3668-48af-aa8b-f96be478c148": "TRANSIT",
    "2db1bc7f-bd97-4126-b714-18d309fd053c": "DINING",
    "b0c8cc70-e90d-49fa-adca-f709dc8592d3": "Castle Point",
    "c7fc4b13-5554-458e-b0d8-67f716ce09ca": "CHAT",
    "40759ed3-511b-42d2-b1dd-e91b3575446d": "hoboken_path_details",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "19c2cfc0-a121-43f5-9606-2cf773b89123": "DEPARTMENT_LIST",
    "496cc479-3c7b-4260-a5eb-87f670a31867": "HOUSING_SERVICE",
    "0d90ed29-a512-4c80-ba85-5a10fe6fd12c": "Direction",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);