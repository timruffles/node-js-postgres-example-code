events.update(3, {
  startAt: fixedDate
}, function(err) {
  if(err) {
    console.error("update failed: " + err);
  } else {
    console.log("updated event!");
  }
});