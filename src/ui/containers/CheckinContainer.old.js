import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import CheckinList from '../components/CheckinList';
import mcPeople , {insert, remove} from '/imports/collections/mcPeople';
import mcAttendances from '/imports/collections/mcAttendances'
import * as sg from 'sugar';              // sugar utility

function recordAttendance(person_id, hours) {

  // put attendance record
  mcAttendances.insert({
    atnPersonID: person_id,
    atnDate: sg.Date.create('today'),
    atnHours: hours
  });
  
  // update last attended date for the person
  let updateDoc = {}
  updateDoc._id = person_id;
  updateDoc.pplLastAtn = sg.Date.create('today');

  mcPeople.update(
    person_id, 
    {$set: updateDoc}
  );

}

const CheckinContainer = createContainer(() => {
  const peopleHandle = Meteor.subscribe('ready.for.checkin');
  const loading = ! peopleHandle.ready();
  const ppl = mcPeople.find({pplLastAtn: {$ne: sg.Date.create('today')}}, { sort: { pplLastAtn: 1, pplSurname: -1} }).fetch();

  return {
    loading,
    ppl,
    recordAttendance,
  };
}, CheckinList);

export default CheckinContainer;
