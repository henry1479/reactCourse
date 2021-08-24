
import { toggleData }  from '../store/actions/toggleData';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import PresentationProfile from './PresentProfile'



// компонент реализует страницу пользователя
// получает и отправляет данные из стора с помощью 
//хуков или функции connect
// является контейнерным компонентом

const ProfilePage= (props)=> {
    
    //получаем данные
    const {name, lastName, isShowData} = useSelector((state)=>state.profileReducer?.profile)

    const dispatch = useDispatch();
    //отправляем данные
    // const toggleData = useCallback(()=>{
    //     dispatch({type:'TOGGLE_DATA'});
    // },[dispatch]);

    return (
        <div>
           <PresentationProfile isShowData={props.profile.isShowData} name={name} lastName={lastName} toggleData={props.toggleData}/> 
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