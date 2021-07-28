import Button from '../Button'


const Example = () => {
 return(
 <>
    <Button>
        <span style={{fontStyle: "italic"}}>Hello,world!</span>
    </Button>
    <Button>Text second</Button>
    <Button children={<div>Child</div>}/>
</>
    )
}


export default Example