
import { toggleData }  from './actions/toggleData';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

// компонент реализует страницу пользователя
// получает и отправляет данные из стора с помощью 
//хуков или функции connect

const ProfilePage= (props)=> {
    
    //получаем данные
    const {name, lastName, isShowData} = useSelector((state)=>state.profileReducer.profile)

    const dispatch = useDispatch();
    //отправляем данные
    // const toggleData = useCallback(()=>{
    //     dispatch({type:'TOGGLE_DATA'});
    // },[dispatch]);

    return (
        <div>
           <div style={(isShowData === false)?{display: 'none'}:{display: 'block'}}>
                <p>{name}</p>
                <p>{lastName}</p>
           </div>
            <label>
                Show data
                <input type="checkbox" name="dataShoeToggle" checked={props.profile.isShowData} value={props.profile.isShowData} onChange={props.toggleData}/>
            </label>
        </div>
        
    )
}

// получаем данные
const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile
    }
}
// отправляем данные
const mapDispatchToProps = (dispatch) => {
    return {
        toggleData:()=>dispatch(toggleData())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)