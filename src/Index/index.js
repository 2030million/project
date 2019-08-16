import React from 'react'
import './index.css'


function AX(props) {
    return (
        <div className="item">
            {props.children}
            <img src={props.url} alt="#" />
        </div>
    );
}

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checks: [false, false, false],
            datalist: [
                {
                    id: '1',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                },
                {
                    id: '2',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                },
                {
                    id: '3',
                    name: 'foo',
                    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <label className="ax-label">
                    <input type="checkbox" className="ax-checkbox" ref="myAllCheck"
                           checked={this.state.checks.every((item) => item)?"checked":""}
                        onChange={this.handleAllChange.bind(this)} />
                    <span className="ax-span"></span>
                </label>

                <div className="contain">
                    {
                        this.state.datalist.map((item, index) => {
                            return <AX url={item.url} key={item.id}>
                                <label className="ax-label">
                                    <input type="checkbox" className={`ax-checkbox ${index}`}
                                           checked={this.state.checks[index]?"checked":""}
                                            onChange={(e) => {this.handleItemChange(e)}} />
                                    <span className="ax-span"></span>
                                </label>
                            </AX>
                        })
                    }
                </div>

            </div>

        );
    }

    handleAllChange() {
        let newChecks = this.state.checks;
        newChecks.fill(this.refs.myAllCheck.checked);
        this.setState({
            checks: newChecks
        });
    }

    handleItemChange = (event) => {
        let target = event.target.className.substr(-1);
        let newChecks = this.state.checks;
        newChecks[target] = event.target.checked;
        this.setState({
            checks: newChecks
        });
    }

}


export default Index