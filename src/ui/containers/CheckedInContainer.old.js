import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import CheckedInList from '../components/CheckedInList';
import mcPeople , {insert, remove} from '/imports/collections/mcPeople';
import * as sg from 'sugar';              // sugar utility


const CheckedInContainer = createContainer(() => {
  const peopleHandle = Meteor.subscribe('checked.in');
  const loading = ! peopleHandle.ready();
  const ppl = mcPeople.find({pplLastAtn: {$eq: sg.Date.create('today')}}, { sort: { pplLastAtn: 1, pplSurname: -1} }).fetch();

  return {
    loading,
    ppl,
  };
}, CheckedInList);

export default CheckedInContainer;
