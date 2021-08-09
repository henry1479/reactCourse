import { makeStyles,createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> createStyles({
    name: {
        fontWeight: '700',
        color: theme.palette.primary.third,
        fontSize: '18px',

       
    },
    
    lastName: {
        fontWeight: '700',
        color: theme.palette.primary.second,
        fontSize: '22px',
    },
 
    
 })
 )
 
// это презентационный компонент
const PresentationProfile = (props) => {

    const classes = useStyles();
 return(
    <>
        <h2 className={classes.lastName}>Information about the user is here.</h2>
        <div style={(props.isShowData === false)?{display: 'none'}:{display: 'block'}}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.lastName}>{props.lastName}</p>
           </div>
            <label className={classes.name}>
                Show data
                <input type="checkbox" name="dataShoeToggle" checked={props.isShowData} value={props.isShowData} onChange={props.toggleData}/>
            </label>
    </>
    )
}


export default PresentationProfile