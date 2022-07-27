const LovelyForm = ({setData}) => {

    const completeData = ["amdrew", "me", "not me", "jorden", "gorden","andrew mccall"]

    return(
        <label>Search: <input onChange={(e) => {
            setData(completeData.filter(n => n.startsWith(e.target.value)))
        }}/></label>
    )

} 

export default LovelyForm;