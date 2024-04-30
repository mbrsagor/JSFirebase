# Realtime Database Firebase

> In this project basically javascript simple operation firestore cloud realtime messaging.

- Below the simple example for `get` & `set` data  

```javascript
// Set data
function send_data() {
  database.ref('data').set({
    message: 'Bozlur Rosid Sagor'
  });
}

// Get data
function get_data() {
  database.ref('data').once('value', function(snapshot) {
    var data = snapshot.val();
    console.log(data.message);
  });
}

// Run
get_data();
send_data();
```
