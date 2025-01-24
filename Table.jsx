export default function Table(){
    let data = [
        {name:"Name",title:"title",salary :"salary"},
        ["Ram","Developer",1000000],
        ["Sita","Designer",900000],
        ["Hanu","Tester",900000]
    ]

    return(
        <div>
            
            {
                <table border = {2} style = {{bordercollapse : "collapse"}}>
                    <tr>
                       {Object.keys(data[0]).map(item =><th >{item}</th>)}
                    </tr>
                    {
                        data.slice(1).map((row, key) => {
                            return (
                                <tr>
                                    {
                                        row.map((col, key2) => {
                                            return (
                                            <td>{col}</td>
                                        )})
                                    }
                                </tr>
                            )
                        })
                    }
                </table>
            }
        </div>
    )
}