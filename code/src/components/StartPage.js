import quotes from '..reducers/quotes';
import { useDispatch } from 'react-redux';

const StartPage  = () => {
    const [userName, setUserName] = useState('');

    const dispatch = useDispatch();

    const onUserNameSet = () => {
        dispatch(quotes.actions.setUserName(inputValue));
    }

    return (
        <div>
            <p>Welcome to Labyrinth! Please enter your name: </p>
            <input
                type='text'
                value={inputValue}
                onChange={event => onUserNameSet(event.target.value)}
            />
            <button onClick={onUserNameSet}>Let's begin!</button>
        </div>
    )
}