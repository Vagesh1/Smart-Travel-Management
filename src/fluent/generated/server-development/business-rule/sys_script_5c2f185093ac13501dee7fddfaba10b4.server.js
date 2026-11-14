(function executeRule(current, previous /*null when async*/) {

var smt = new GlideRecord(current.getTableName());
smt.addQuery("caller", current.caller);
smt.addQuery("state","IN", "1,-5");
smt.query();

if (smt.next()) {

    gs.addErrorMessage("New Bookings by same caller is not allowed when tickets are in open or pending");

    current.setAbortAction(true);

}



})(current, previous);