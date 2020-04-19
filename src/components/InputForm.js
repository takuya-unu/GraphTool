import React from 'react';
import Canvas from './Canvas'
import Bezier from './Bezier';
import Line from './Line';
import Clear from './Clear';
import Text from './Text';

export default class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {var1: 0, var2: 0,var3: 0};
      this.handleChange = this.handleChange.bind(this);
      this.a=((800*this.state.var1-50*this.state.var2)/this.state.var1)*window.innerWidth/1600;
      this.b1=(50*Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*(this.state.var3-8))/this.state.var1)*window.innerWidth/1600;
      this.b2=(50*Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*(this.state.var3+8))/this.state.var1)*window.innerWidth/1600;
      this.c1=((1600*this.state.var1-200*this.state.var1*this.state.var3+50*this.state.var2*this.state.var2)/this.state.var1)*window.innerHeight/1600;
      this.c2=(-200*this.state.var3+(50*this.state.var2*this.state.var2)/this.state.var1)*window.innerHeight/1600;
      this.switch=false;
    }
  
    handleChange(name) {
      return (event) => {
          this.setState({
          [name]: Number(event.target.value) || 0,  
        }); 
        this.switch=true;
        
      };
      
    }

    render() {
      return (
        <div>
            <div>
                a:<input type="text" value={this.state.var1 || ''} onChange={this.handleChange('var1')} />
            </div>
          <div>
              b:<input type="text" value={this.state.var2 || ''} onChange={this.handleChange('var2')} />
          </div>
          <div>
              c:<input type="text" value={this.state.var3 || ''} onChange={this.handleChange('var3')} />
            </div>
          <div>
              y={this.state.var1}x^2+{this.state.var2}x+{this.state.var3}
              </div>
            <div>
                {
                    this.a=((800*this.state.var1-50*this.state.var2)/this.state.var1)*window.innerWidth/1600,
                    this.b1=(50*Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*(this.state.var3-8))/this.state.var1)*window.innerWidth/1600,
                    this.b2=(50*Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*(this.state.var3+8))/this.state.var1)*window.innerWidth/1600,
                    this.c1=((1600*this.state.var1-200*this.state.var1*this.state.var3+50*this.state.var2*this.state.var2)/this.state.var1)*window.innerHeight/1600,
                    this.c2=(-200*this.state.var3+(50*this.state.var2*this.state.var2)/this.state.var1)*window.innerHeight/1600
                }
            </div>
            <div>
            <Canvas id="c" width={window.innerWidth} height={window.innerHeight} >
               <Line from={{x: 0,y:window.innerHeight/2}} to={{x:window.innerWidth, y:window.innerHeight/2}} stroke='darkblue' ></Line>
               <Line from={{x:window.innerWidth/2,y:0}} to={{x:window.innerWidth/2, y:window.innerHeight}} stroke='darkblue' ></Line>
               <Text text="x" x={window.innerWidth-40} y={window.innerHeight/2-20}></Text>
               <Text text="y" x={window.innerWidth/2-30} y='20'></Text>
               <Text text="O" x={window.innerWidth/2-30} y={window.innerHeight/2+30}></Text>
               <Text text="8" x={window.innerWidth/2+10} y='20'></Text>
               <Text text="8" x={window.innerWidth-40} y={window.innerHeight/2+30}></Text>
               <Text text="-8" x='20' y={window.innerHeight/2+30}></Text>
               <Text text="-8" x={window.innerWidth/2+10} y={window.innerHeight-20}></Text>
               
               {(() =>{
                    if(this.switch==true){
                        return <Clear x='0' y='0' width={window.innerWidth} height={window.innerHeight} ></Clear>;
                    }
                    return false;
                })()}
               {(() =>{
                    if(this.switch==true){
                        return <Line from={{x: 0,y:window.innerHeight/2}} to={{x:window.innerWidth, y:window.innerHeight/2}} stroke='darkblue' ></Line>
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return <Line from={{x:window.innerWidth/2,y:0}} to={{x:window.innerWidth/2, y:window.innerHeight}} stroke='darkblue' ></Line>
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return <Text text="x" x={window.innerWidth-40} y={window.innerHeight/2-20}></Text>
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return <Text text="y" x={window.innerWidth/2-30} y='20'></Text>
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return <Text text="O" x={window.innerWidth/2-30} y={window.innerHeight/2+30}></Text>
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return <Text text="8" x={window.innerWidth/2+10} y='20'></Text>
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return <Text text="8" x={window.innerWidth-40} y={window.innerHeight/2+30}></Text>
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return <Text text="-8" x='20' y={window.innerHeight/2+30}></Text>
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return <Text text="-8" x={window.innerWidth/2+10} y={window.innerHeight-20}></Text>
                    }
                    return false;
                })()}
                
                
                {(() =>{
                    if(this.switch==true){
                        if(this.state.var3!=0){
                            return <Text text={this.state.var3} x={window.innerWidth/2+10} y={(830-100*this.state.var3)*window.innerHeight/1600}></Text>
                        }
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        if(this.state.var1>0){
                            return <Bezier from={
                                {x: this.a-this.b1, y:0}} to={{x:this.a+this.b1, y:0}} cp={{x:this.a, y:this.c1}} stroke='blue'></Bezier>;
                        }
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        if(this.state.var1<0){
                            return <Bezier from={
                                {x: this.a-this.b2, y:window.innerHeight}} to={{x:this.a+this.b2, y:window.innerHeight}} cp={{x:this.a, y:this.c2}} stroke='blue'></Bezier>;
                        }
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        return this.switch=false;
                    }
                    return false;
                })()}
                 </Canvas>
        </div>
        </div>
      );
    }
  }
  
