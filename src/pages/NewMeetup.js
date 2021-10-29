import { useHistory } from 'react-router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage(){

    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch('https://myreact-c8849-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'Application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
    <section>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
}

export default NewMeetupPage;