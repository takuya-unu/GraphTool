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
      this.d1=(16*this.state.var1-this.state.var2-Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*this.state.var3))/this.state.var1/2;
      this.d2=(16*this.state.var1-this.state.var2+Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*this.state.var3))/this.state.var1/2;
      this.d=this.state.var2*this.state.var2-4*this.state.var1*this.state.var3;
      this.keep=101;
      this.keep1=101;
      this.keep2=101;
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
                y=<input type="text" value={this.state.var1 || ''} onChange={this.handleChange('var1')} />
                x^2
                {(() =>{
                    if(this.state.var2>=0){
                        return "+";
                    }
                    return false;
                })()}
                <input type="text" value={this.state.var2 || ''} onChange={this.handleChange('var2')} />
                x
                {(() =>{
                    if(this.state.var2>=0){
                        return "+";
                    }
                    return false;
                })()}
                <input type="text" value={this.state.var3 || ''} onChange={this.handleChange('var3')} />
            </div>
            <div>
                グラフ
            </div>
                {
                    this.a=((800*this.state.var1-50*this.state.var2)/this.state.var1)*window.innerWidth/1600,
                    this.b1=(50*Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*(this.state.var3-8))/this.state.var1)*window.innerWidth/1600,
                    this.b2=(50*Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*(this.state.var3+8))/this.state.var1)*window.innerWidth/1600,
                    this.c1=((1600*this.state.var1-200*this.state.var1*this.state.var3+50*this.state.var2*this.state.var2)/this.state.var1)*window.innerHeight/1600,
                    this.c2=(-200*this.state.var3+(50*this.state.var2*this.state.var2)/this.state.var1)*window.innerHeight/1600,
                    this.d1=(16*this.state.var1-this.state.var2-Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*this.state.var3))/this.state.var1/2,
                    this.d2=(16*this.state.var1-this.state.var2+Math.sqrt(this.state.var2*this.state.var2-4*this.state.var1*this.state.var3))/this.state.var1/2,
                    this.d=this.state.var2*this.state.var2-4*this.state.var1*this.state.var3,
                    <null></null>
                }
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

/*下に凸 */                
                
                {(() =>{
                    if(this.switch==true){
                        if(this.state.var1>0){
                            if(this.state.var3!=0){
                                if(this.state.var2==0){
                                    this.keep=101;
                                    for(var i=2;i<100;i++){
                                        if(this.state.var1%i==0){
                                            if(this.state.var3*(-1)%i==0){
                                                this.keep=i;
                                            }
                                        }
                                    }
                                    if(this.keep!=101){/*約分できた*/
                                        this.keep1=101;
                                        for(var j=2;j<100;j++){
                                            if((this.state.var3*(-1)/this.keep)==j){
                                                break;
                                            }
                                            if((this.state.var3*(-1)/this.keep)%(j*j)==0){
                                                this.keep1=j;
                                            }
                                        }
                                        this.keep2=101;
                                        for(var k=2;k<100;k++){
                                            if((this.state.var1/this.keep)==k){
                                                break;
                                            }
                                            if((this.state.var1/this.keep)%(k*k)==0){
                                                this.keep2=k;
                                            }
                                        }
                                        if(this.state.var1/this.keep==1){/*分母１のとき*/
                                            if(this.keep1!=101){/*√の中身が簡単にできる */
                                                if((this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)==1){/*√の中身が1で有理数になる*/
                                                    return <Text text={(-1)*this.keep1} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }else{/*√の中身を簡単にしたけど√は残った*/
                                                    return <Text text={(-1)*this.keep1+'√'+(this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }else{/*分母が1じゃない */
                                            if(this.keep1!=101){/*分子の√の中身が簡単にできる */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if((this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が1で有理数になる */
                                                        if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分母の√の中身が１で有理数になる */
                                                            return <Text text={(-1)*this.keep1+'/'+this.keep2} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母の√の中身が簡単になったけど√は残った、かつ、分子は有理数*/
                                                            return <Text text={(-1)*this.keep1+'/'+this.keep2+'√'+(this.state.var1/this.keep)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }else{/*分子の√の中身が簡単になったけど√は残った*/
                                                        if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分子は√、分母は有理数 */
                                                            return <Text text={(-1)*this.keep1+'√'+(this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母、分子ともに√が残った*/
                                                            return <Text text={(-1)*this.keep1+'√'+(this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2+'√'(this.state.var1/this.keep)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }
                                                }else{/*分母の√が簡単にできない */
                                                    if((this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が１で有理数になる */
                                                        return <Text text={(-1)*this.keep1+'/√'+(this.state.var1/this.keep)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分子の√が残った、かつ分母はルートのまま */
                                                        return <Text text={(-1)*this.keep1+'√'+(this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)+'/√'+(this.state.var1/this.keep)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }
                                            }else{/*分子のルートの中身が簡単にできない */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分母のルートの中身が1で有理数になる*/
                                                        return <Text text={'-√'+this.state.var3*(-1)/this.keep+'/'+this.keep2} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分母の√の中身が簡単にできるけど無理数が残る */
                                                        return <Text text={'-√'+this.state.var3*(-1)/this.keep+'/'+this.keep2+'√'+(this.state.var1/this.keep)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }else{/*分母の√が簡単にならない */
                                                    return <Text text={'-√'+this.state.var3*(-1)/this.keep+'/√'+this.state.var1/this.keep} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }
                                    }else{/*約分できない */
                                        this.keep1=101;
                                        for(var j=2;j<100;j++){
                                            if(this.state.var3*(-1)==j){
                                                break;
                                            }if(this.state.var3*(-1)%(j*j)==0){
                                                this.keep1=j;
                                            }
                                        }
                                        this.keep2=101;
                                        for(var k=2;k<100;k++){
                                            if(this.state.var1==k){
                                                break;
                                            }if(this.state.var1%(k*k)==0){
                                                this.keep2=k;
                                            }
                                        }
                                        if(this.state.var1==1){/*分母が１のとき */
                                            if(this.keep1!=101){/*分子のルートが簡単にできる */
                                                if(this.state.var3*(-1)/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                    return <Text text={(-1)*this.keep1} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }else{/*分子のルートが簡単にできるけど√が残る */
                                                    return <Text text={(-1)*this.keep1+"√"+this.state.var3*(-1)/(this.keep1*this.keep1)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }else{/*分子の√が簡単にできない */
                                                if(this.state.var3*(-1)==1){
                                                    return <Text text={-1} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }else{
                                                    return <Text text={'-√'+this.state.var3*(-1)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }else{/*分母が1でない */
                                            if(this.keep1!=101){/*分子のルートが簡単にできる */
                                                if(this.keep2!=101){/*分母のルートが簡単にできる */
                                                    if(this.state.var3*(-1)/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                        if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                            return <Text text={(-1)*this.keep1+'/'+this.keep2} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母のルートが消えない */
                                                            return <Text text={(-1)*this.keep1+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }else{/*分子のルートが消えない */
                                                        if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                            return <Text text={(-1)*this.keep1+'√'+this.state.var3*(-1)/(this.keep1*this.keep1)+'/'+this.keep2} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母のルートが消えない */
                                                            return <Text text={(-1)*this.keep1+'√'+this.state.var3*(-1)/(this.keep1*this.keep1)+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }
                                                }else{/*分母のルートが簡単にできない */
                                                    if(this.state.var3*(-1)/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                        return <Text text={(-1)*this.keep1+'/√'+this.state.var1} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分子のルートが消えない */
                                                        return <Text text={(-1)*this.keep1+'√'+this.state.var3*(-1)/(this.keep1*this.keep1)+'/√'+this.state.var1} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }
                                            }else{/*分子のルートが簡単にできない */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                        return <Text text={'-√'+this.state.var3*(-1)+'/'+this.keep2} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分母のルートが消えない */
                                                        return <Text text={'-√'+this.state.var3*(-1)+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }else{
                                                    return <Text text={'-√'+this.state.var3*(-1)+'/√'+this.state.var1} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }
                                    }
                                }
                                else{
                                    this.keep=101;
                                    for(var i=2;i<100;i++){
                                        if(this.d==i){
                                            break;
                                        }
                                        if(this.d%(i*i)==0){
                                            if((2*this.state.var1)%i==0){
                                                if(this.state.var2%i==0){
                                                    this.keep=i;
                                                }
                                            }
                                        }
                                    }
                                    if(this.keep!=101){
                                        if(2*this.state.var1/this.keep==1){
                                            return <Text text={(-1)*this.state.var2/this.keep+'-√'+this.d/(this.keep*this.keep)} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                        }else{
                                            return <Text text={'('+(-1)*this.state.var2/this.keep+'-√'+this.d/(this.keep*this.keep)+')/'+2*this.state.var1/this.keep} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                        }
                                    }else{
                                        return <Text text={'('+(-1)*this.state.var2+'-√'+this.d+')/'+2*this.state.var1} x={this.d1*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                    }
                                }
                            }
                        }
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        if(this.state.var1>0){
                            if(this.state.var3!=0){
                                if(this.state.var2==0){
                                    this.keep=101;
                                    for(var i=2;i<100;i++){
                                        if(this.state.var1%i==0){
                                            if(this.state.var3*(-1)%i==0){
                                                this.keep=i;
                                            }
                                        }
                                    }
                                    if(this.keep!=101){/*約分できた*/
                                        this.keep1=101;
                                        for(var j=2;j<100;j++){
                                            if((this.state.var3*(-1)/this.keep)==j){
                                                break;
                                            }
                                            if((this.state.var3*(-1)/this.keep)%(j*j)==0){
                                                this.keep1=j;
                                            }
                                        }
                                        this.keep2=101;
                                        for(var k=2;k<100;k++){
                                            if((this.state.var1/this.keep)==k){
                                                break;
                                            }
                                            if((this.state.var1/this.keep)%(k*k)==0){
                                                this.keep2=k;
                                            }
                                        }
                                        if(this.state.var1/this.keep==1){/*分母１のとき*/
                                            if(this.keep1!=101){/*√の中身が簡単にできる */
                                                if((this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)==1){/*√の中身が1で有理数になる*/
                                                    return <Text text={this.keep1} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }else{/*√の中身を簡単にしたけど√は残った*/
                                                    return <Text text={this.keep1+'√'+(this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }else{/*分母が1じゃない */
                                            if(this.keep1!=101){/*分子の√の中身が簡単にできる */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if((this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が1で有理数になる */
                                                        if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分母の√の中身が１で有理数になる */
                                                            return <Text text={this.keep1+'/'+this.keep2} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母の√の中身が簡単になったけど√は残った、かつ、分子は有理数*/
                                                            return <Text text={this.keep1+'/'+this.keep2+'√'+(this.state.var1/this.keep)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }else{/*分子の√の中身が簡単になったけど√は残った*/
                                                        if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分子は√、分母は有理数 */
                                                            return <Text text={this.keep1+'√'+(this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母、分子ともに√が残った*/
                                                            return <Text text={this.keep1+'√'+(this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2+'√'(this.state.var1/this.keep)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }
                                                }else{/*分母の√が簡単にできない */
                                                    if((this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が１で有理数になる */
                                                        return <Text text={this.keep1+'/√'+(this.state.var1/this.keep)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分子の√が残った、かつ分母はルートのまま */
                                                        return <Text text={this.keep1+'√'+(this.state.var3*(-1)/this.keep)/(this.keep1*this.keep1)+'/√'+(this.state.var1/this.keep)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }
                                            }else{/*分子のルートの中身が簡単にできない */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分母のルートの中身が1で有理数になる*/
                                                        return <Text text={'√'+this.state.var3*(-1)/this.keep+'/'+this.keep2} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分母の√の中身が簡単にできるけど無理数が残る */
                                                        return <Text text={'√'+this.state.var3*(-1)/this.keep+'/'+this.keep2+'√'+(this.state.var1/this.keep)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }else{/*分母の√が簡単にならない */
                                                    return <Text text={'√'+this.state.var3*(-1)/this.keep+'/√'+this.state.var1/this.keep} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }
                                    }else{/*約分できない */
                                        this.keep1=101;
                                        for(var j=2;j<100;j++){
                                            if(this.state.var3*(-1)==j){
                                                break;
                                            }if(this.state.var3*(-1)%(j*j)==0){
                                                this.keep1=j;
                                            }
                                        }
                                        this.keep2=101;
                                        for(var k=2;k<100;k++){
                                            if(this.state.var1==k){
                                                break;
                                            }if(this.state.var1%(k*k)==0){
                                                this.keep2=k;
                                            }
                                        }
                                        if(this.state.var1==1){/*分母が１のとき */
                                            if(this.keep1!=101){/*分子のルートが簡単にできる */
                                                if(this.state.var3*(-1)/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                    return <Text text={this.keep1} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }else{/*分子のルートが簡単にできるけど√が残る */
                                                    return <Text text={this.keep1+"√"+this.state.var3*(-1)/(this.keep1*this.keep1)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }else{/*分子の√が簡単にできない */
                                                if(this.state.var3*(-1)==1){
                                                    return <Text text={1} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }else{
                                                    return <Text text={'√'+this.state.var3*(-1)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }else{/*分母が1でない */
                                            if(this.keep1!=101){/*分子のルートが簡単にできる */
                                                if(this.keep2!=101){/*分母のルートが簡単にできる */
                                                    if(this.state.var3*(-1)/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                        if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                            return <Text text={this.keep1+'/'+this.keep2} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母のルートが消えない */
                                                            return <Text text={this.keep1+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }else{/*分子のルートが消えない */
                                                        if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                            return <Text text={this.keep1+'√'+this.state.var3*(-1)/(this.keep1*this.keep1)+'/'+this.keep2} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母のルートが消えない */
                                                            return <Text text={this.keep1+'√'+this.state.var3*(-1)/(this.keep1*this.keep1)+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }
                                                }else{/*分母のルートが簡単にできない */
                                                    if(this.state.var3*(-1)/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                        return <Text text={this.keep1+'/√'+this.state.var1} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分子のルートが消えない */
                                                        return <Text text={this.keep1+'√'+this.state.var3*(-1)/(this.keep1*this.keep1)+'/√'+this.state.var1} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }
                                            }else{/*分子のルートが簡単にできない */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                        return <Text text={'√'+this.state.var3*(-1)+'/'+this.keep2} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分母のルートが消えない */
                                                        return <Text text={'√'+this.state.var3*(-1)+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }else{
                                                    return <Text text={'√'+this.state.var3*(-1)+'/√'+this.state.var1} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }
                                    }
                                }
                                else{
                                    this.keep=101;
                                    for(var i=2;i<100;i++){
                                        if(this.d==i){
                                            break;
                                        }
                                        if(this.d%(i*i)==0){
                                            if((2*this.state.var1)%i==0){
                                                if(this.state.var2%i==0){
                                                    this.keep=i;
                                                }
                                            }
                                        }
                                    }
                                    if(this.keep!=101){
                                        if(2*this.state.var1/this.keep==1){
                                            return <Text text={(-1)*this.state.var2/this.keep+'+√'+this.d/(this.keep*this.keep)} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                        }else{
                                            return <Text text={'('+(-1)*this.state.var2/this.keep+'+√'+this.d/(this.keep*this.keep)+')/'+2*this.state.var1/this.keep} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                        }
                                    }else{
                                        return <Text text={'('+(-1)*this.state.var2+'+√'+this.d+')/'+2*this.state.var1} x={this.d2*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                    }
                                }
                            }
                        }
                    }
                    return false;
                })()}

/*上に凸 */                

                {(() =>{
                    if(this.switch==true){
                        if(this.state.var1<0){
                            if(this.state.var3!=0){
                                if(this.state.var2==0){
                                    this.keep=101;
                                    for(var i=2;i<100;i++){
                                        if(this.state.var1*(-1)%i==0){
                                            if(this.state.var3%i==0){
                                                this.keep=i;
                                            }
                                        }
                                    }
                                    if(this.keep!=101){/*約分できた*/
                                        this.keep1=101;
                                        for(var j=2;j<100;j++){
                                            if((this.state.var3/this.keep)==j){
                                                break;
                                            }
                                            if((this.state.var3/this.keep)%(j*j)==0){
                                                this.keep1=j;
                                            }
                                        }
                                        this.keep2=101;
                                        for(var k=2;k<100;k++){
                                            if((this.state.var1*(-1)/this.keep)==k){
                                                break;
                                            }
                                            if((this.state.var1*(-1)/this.keep)%(k*k)==0){
                                                this.keep2=k;
                                            }
                                        }
                                        if(this.state.var1*(-1)/this.keep==1){/*分母１のとき*/
                                            if(this.keep1!=101){/*√の中身が簡単にできる */
                                                if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*√の中身が1で有理数になる*/
                                                    return <Text text={this.keep1} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }else{/*√の中身を簡単にしたけど√は残った*/
                                                    return <Text text={this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }else{/*分母が1じゃない */
                                            if(this.keep1!=101){/*分子の√の中身が簡単にできる */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が1で有理数になる */
                                                        if((this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)==1){/*分母の√の中身が１で有理数になる */
                                                            return <Text text={this.keep1+'/'+this.keep2} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母の√の中身が簡単になったけど√は残った、かつ、分子は有理数*/
                                                            return <Text text={this.keep1+'/'+this.keep2+'√'+(this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }else{/*分子の√の中身が簡単になったけど√は残った*/
                                                        if((this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)==1){/*分子は√、分母は有理数 */
                                                            return <Text text={this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母、分子ともに√が残った*/
                                                            return <Text text={this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2+'√'(this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }
                                                }else{/*分母の√が簡単にできない */
                                                    if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が１で有理数になる */
                                                        return <Text text={this.keep1+'/√'+(this.state.var1*(-1)/this.keep)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分子の√が残った、かつ分母はルートのまま */
                                                        return <Text text={this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/√'+(this.state.var1*(-1)/this.keep)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }
                                            }else{/*分子のルートの中身が簡単にできない */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if((this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)==1){/*分母のルートの中身が1で有理数になる*/
                                                        return <Text text={'√'+this.state.var3/this.keep+'/'+this.keep2} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分母の√の中身が簡単にできるけど無理数が残る */
                                                        return <Text text={'√'+this.state.var3/this.keep+'/'+this.keep2+'√'+(this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }else{/*分母の√が簡単にならない */
                                                    return <Text text={'√'+this.state.var3/this.keep+'/√'+this.state.var1*(-1)/this.keep} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }
                                    }else{/*約分できない */
                                        this.keep1=101;
                                        for(var j=2;j<100;j++){
                                            if(this.state.var3==j){
                                                break;
                                            }if(this.state.var3%(j*j)==0){
                                                this.keep1=j;
                                            }
                                        }
                                        this.keep2=101;
                                        for(var k=2;k<100;k++){
                                            if(this.state.var1*(-1)==k){
                                                break;
                                            }if(this.state.var1*(-1)%(k*k)==0){
                                                this.keep2=k;
                                            }
                                        }
                                        if(this.state.var1*(-1)==1){/*分母が１のとき */
                                            if(this.keep1!=101){/*分子のルートが簡単にできる */
                                                if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                    return <Text text={this.keep1} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }else{/*分子のルートが簡単にできるけど√が残る */
                                                    return <Text text={this.keep1+"√"+this.state.var3/(this.keep1*this.keep1)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }else{/*分子の√が簡単にできない */
                                                if(this.state.var3==1){
                                                    return <Text text={1} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }else{
                                                    return <Text text={'√'+this.state.var3} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }else{/*分母が1でない */
                                            if(this.keep1!=101){/*分子のルートが簡単にできる */
                                                if(this.keep2!=101){/*分母のルートが簡単にできる */
                                                    if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                        if(this.state.var1*(-1)/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                            return <Text text={this.keep1+'/'+this.keep2} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母のルートが消えない */
                                                            return <Text text={this.keep1+'/'+this.keep2+'√'+this.state.var1*(-1)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }else{/*分子のルートが消えない */
                                                        if(this.state.var1*(-1)/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                            return <Text text={this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/'+this.keep2} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母のルートが消えない */
                                                            return <Text text={this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/'+this.keep2+'√'+this.state.var1*(-1)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }
                                                }else{/*分母のルートが簡単にできない */
                                                    if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                        return <Text text={this.keep1+'/√'+this.state.var3} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分子のルートが消えない */
                                                        return <Text text={this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/√'+this.state.var1*(-1)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }
                                            }else{/*分子のルートが簡単にできない */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if(this.state.var1*(-1)/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                        return <Text text={'√'+this.state.var3+'/'+this.keep2} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分母のルートが消えない */
                                                        return <Text text={'√'+this.state.var3+'/'+this.keep2+'√'+this.state.var1*(-1)/(this.keep2*this.keep2)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }else{
                                                    return <Text text={'√'+this.state.var3+'/√'+this.state.var1*(-1)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }
                                    }
                                }
                                else{
                                    this.keep=101;
                                    for(var i=2;i<100;i++){
                                        if(this.d==i){
                                            break;
                                        }
                                        if(this.d%(i*i)==0){
                                            if((2*this.state.var1*(-1))%i==0){
                                                if(this.state.var2%i==0){
                                                    this.keep=i;
                                                }
                                            }
                                        }
                                    }
                                    if(this.keep!=101){
                                        if(2*this.state.var1*(-1)/this.keep==1){
                                            return <Text text={(-1)*this.state.var2/this.keep+'+√'+this.d/(this.keep*this.keep)} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                        }else{
                                            return <Text text={'('+(-1)*this.state.var2/this.keep+'+√'+this.d/(this.keep*this.keep)+')/'+2*this.state.var1/this.keep} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                        }
                                    }else{
                                        return <Text text={'('+(-1)*this.state.var2+'+√'+this.d+')/'+2*this.state.var1} x={this.d1*window.innerWidth/16+30} y={window.innerHeight/2+30}></Text>
                                    }
                                }
                            }
                        }
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        if(this.state.var1<0){
                            if(this.state.var3!=0){
                                if(this.state.var2==0){
                                    this.keep=101;
                                    for(var i=2;i<100;i++){
                                        if(this.state.var1*(-1)%i==0){
                                            if(this.state.var3%i==0){
                                                this.keep=i;
                                            }
                                        }
                                    }
                                    if(this.keep!=101){/*約分できた*/
                                        this.keep1=101;
                                        for(var j=2;j<100;j++){
                                            if((this.state.var3/this.keep)==j){
                                                break;
                                            }
                                            if((this.state.var3/this.keep)%(j*j)==0){
                                                this.keep1=j;
                                            }
                                        }
                                        this.keep2=101;
                                        for(var k=2;k<100;k++){
                                            if((this.state.var1*(-1)/this.keep)==k){
                                                break;
                                            }
                                            if((this.state.var1*(-1)/this.keep)%(k*k)==0){
                                                this.keep2=k;
                                            }
                                        }
                                        if(this.state.var1*(-1)/this.keep==1){/*分母１のとき*/
                                            if(this.keep1!=101){/*√の中身が簡単にできる */
                                                if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*√の中身が1で有理数になる*/
                                                    return <Text text={(-1)*this.keep1} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }else{/*√の中身を簡単にしたけど√は残った*/
                                                    return <Text text={(-1)*this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }else{/*分母が1じゃない */
                                            if(this.keep1!=101){/*分子の√の中身が簡単にできる */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が1で有理数になる */
                                                        if((this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)==1){/*分母の√の中身が１で有理数になる */
                                                            return <Text text={(-1)*this.keep1+'/'+this.keep2} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母の√の中身が簡単になったけど√は残った、かつ、分子は有理数*/
                                                            return <Text text={(-1)*this.keep1+'/'+this.keep2+'√'+(this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }else{/*分子の√の中身が簡単になったけど√は残った*/
                                                        if((this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)==1){/*分子は√、分母は有理数 */
                                                            return <Text text={(-1)*this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母、分子ともに√が残った*/
                                                            return <Text text={(-1)*this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2+'√'(this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }
                                                }else{/*分母の√が簡単にできない */
                                                    if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が１で有理数になる */
                                                        return <Text text={(-1)*this.keep1+'/√'+(this.state.var1*(-1)/this.keep)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分子の√が残った、かつ分母はルートのまま */
                                                        return <Text text={(-1)*this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/√'+(this.state.var1*(-1)/this.keep)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }
                                            }else{/*分子のルートの中身が簡単にできない */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if((this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)==1){/*分母のルートの中身が1で有理数になる*/
                                                        return <Text text={'-√'+this.state.var3/this.keep+'/'+this.keep2} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分母の√の中身が簡単にできるけど無理数が残る */
                                                        return <Text text={'-√'+this.state.var3/this.keep+'/'+this.keep2+'√'+(this.state.var1*(-1)/this.keep)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }else{/*分母の√が簡単にならない */
                                                    return <Text text={'-√'+this.state.var3/this.keep+'/√'+this.state.var1*(-1)/this.keep} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }
                                    }else{/*約分できない */
                                        this.keep1=101;
                                        for(var j=2;j<100;j++){
                                            if(this.state.var3==j){
                                                break;
                                            }if(this.state.var3%(j*j)==0){
                                                this.keep1=j;
                                            }
                                        }
                                        this.keep2=101;
                                        for(var k=2;k<100;k++){
                                            if(this.state.var1*(-1)==k){
                                                break;
                                            }if(this.state.var1*(-1)%(k*k)==0){
                                                this.keep2=k;
                                            }
                                        }
                                        if(this.state.var1*(-1)==1){/*分母が１のとき */
                                            if(this.keep1!=101){/*分子のルートが簡単にできる */
                                                if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                    return <Text text={(-1)*this.keep1} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }else{/*分子のルートが簡単にできるけど√が残る */
                                                    return <Text text={(-1)*this.keep1+"√"+this.state.var3/(this.keep1*this.keep1)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }else{/*分子の√が簡単にできない */
                                                if(this.state.var3==1){
                                                    return <Text text={-1} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }else{
                                                    return <Text text={'-√'+this.state.var3} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }else{/*分母が1でない */
                                            if(this.keep1!=101){/*分子のルートが簡単にできる */
                                                if(this.keep2!=101){/*分母のルートが簡単にできる */
                                                    if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                        if(this.state.var1*(-1)/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                            return <Text text={(-1)*this.keep1+'/'+this.keep2} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母のルートが消えない */
                                                            return <Text text={(-1)*this.keep1+'/'+this.keep2+'√'+this.state.var1*(-1)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }else{/*分子のルートが消えない */
                                                        if(this.state.var1*(-1)/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                            return <Text text={(-1)*this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/'+this.keep2} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }else{/*分母のルートが消えない */
                                                            return <Text text={(-1)*this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/'+this.keep2+'√'+this.state.var1*(-1)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                        }
                                                    }
                                                }else{/*分母のルートが簡単にできない */
                                                    if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                                                        return <Text text={(-1)*this.keep1+'/√'+this.state.var3} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分子のルートが消えない */
                                                        return <Text text={(-1)*this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/√'+this.state.var1*(-1)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }
                                            }else{/*分子のルートが簡単にできない */
                                                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                                                    if(this.state.var1*(-1)/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                                                        return <Text text={'-√'+this.state.var3+'/'+this.keep2} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }else{/*分母のルートが消えない */
                                                        return <Text text={'-√'+this.state.var3+'/'+this.keep2+'√'+this.state.var1*(-1)/(this.keep2*this.keep2)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                    }
                                                }else{
                                                    return <Text text={'-√'+this.state.var3+'/√'+this.state.var1*(-1)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                                }
                                            }
                                        }
                                    }
                                }
                                else{
                                    this.keep=101;
                                    for(var i=2;i<100;i++){
                                        if(this.d==i){
                                            break;
                                        }
                                        if(this.d%(i*i)==0){
                                            if((2*this.state.var1*(-1))%i==0){
                                                if(this.state.var2%i==0){
                                                    this.keep=i;
                                                }
                                            }
                                        }
                                    }
                                    if(this.keep!=101){
                                        if(2*this.state.var1*(-1)/this.keep==1){
                                            return <Text text={(-1)*this.state.var2/this.keep+'-√'+this.d/(this.keep*this.keep)} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                        }else{
                                            return <Text text={'('+(-1)*this.state.var2/this.keep+'-√'+this.d/(this.keep*this.keep)+')/'+2*this.state.var1/this.keep} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                        }
                                    }else{
                                        return <Text text={'('+(-1)*this.state.var2+'-√'+this.d+')/'+2*this.state.var1} x={this.d2*window.innerWidth/16-30} y={window.innerHeight/2+30}></Text>
                                    }
                                }
                            }
                        }
                    }
                    return false;
                })()}

                {(() =>{
                    if(this.switch==true){
                        if(this.state.var1>0){
                            return <Bezier from={
                                {x: this.a-this.b1, y:0}} to={{x:this.a+this.b1, y:0}} cp={{x:this.a, y:this.c1}} stroke='red'></Bezier>;
                        }
                    }
                    return false;
                })()}
                {(() =>{
                    if(this.switch==true){
                        if(this.state.var1<0){
                            return <Bezier from={
                                {x: this.a-this.b2, y:window.innerHeight}} to={{x:this.a+this.b2, y:window.innerHeight}} cp={{x:this.a, y:this.c2}} stroke='red'></Bezier>;
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