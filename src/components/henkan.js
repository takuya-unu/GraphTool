if(this.state.var2==0){
    this.keep=101;
    for(var i=2;i<100;i++){
        if(this.state.var1%i==0){
            if(this.state.var3%i==0){
                this.keep==i;
            }
        }
    }
    if(this.keep!=101){/*約分できた*/
        this.keep1=101;
        for(var j=2;j<100;j++){
            if((this.state.var3/this.keep)==(j*j)){
                break;
            }
            if((this.state.var3/this.keep)%(j*j)==0){
                this.keep1=j;
            }
        }
        this.keep2=101;
        for(var k=2;k<100;k++){
            if((this.state.var1/this.keep)==(k*k)){
                break;
            }
            if((this.state.var1/this.keep)%(k*k)==0){
                this.keep2=k;
            }
        }
        if(this.state.var1/this.keep==1){/*分母１のとき*/
            if(this.keep1!=101){/*√の中身が簡単にできる */
                if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*√の中身が1で有理数になる*/
                    return <Text text={this.keep1}></Text>
                }else{/*√の中身を簡単にしたけど√は残った*/
                    return <Text text={this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)}></Text>
                }
            }
        }else{/*分母が1じゃない */
            if(this.keep1!=101){/*分子の√の中身が簡単にできる */
                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                    if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が1で有理数になる */
                        if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分母の√の中身が１で有理数になる */
                            return <Text text={this.keep1+'/'+this.keep2}></Text>
                        }else{/*分母の√の中身が簡単になったけど√は残った、かつ、分子は有理数*/
                            return <Text text={this.keep1+'/'+this.keep2+'√'+(this.state.var1/this.keep)/(this.keep2*this.keep2)}></Text>
                        }
                    }else{/*分子の√の中身が簡単になったけど√は残った*/
                        if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分子は√、分母は有理数 */
                            return <Text text={this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2}></Text>
                        }else{/*分母、分子ともに√が残った*/
                            return <Text text={this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/'+this.keep2+'√'(this.state.var1/this.keep)/(this.keep2*this.keep2)}></Text>
                        }
                    }
                }else{/*分母の√が簡単にできない */
                    if((this.state.var3/this.keep)/(this.keep1*this.keep1)==1){/*分子の√の中身が１で有理数になる */
                        return <Text text={this.keep1+'/√'+(this.state.var1/this.keep)}></Text>
                    }else{/*分子の√が残った、かつ分母はルートのまま */
                        return <Text text={this.keep1+'√'+(this.state.var3/this.keep)/(this.keep1*this.keep1)+'/√'+(this.state.var1/this.keep)}></Text>
                    }
                }
            }else{/*分子のルートの中身が簡単にできない */
                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                    if((this.state.var1/this.keep)/(this.keep2*this.keep2)==1){/*分母のルートの中身が1で有理数になる*/
                        return <Text text={'√'+this.state.var3/this.keep+'/'+this.keep2}></Text>
                    }else{/*分母の√の中身が簡単にできるけど無理数が残る */
                        return <Text text={'√'+this.state.var3/this.keep+'/'+this.keep2+'√'+(this.state.var1/this.keep)/(this.keep2*this.keep2)}></Text>
                    }
                }else{/*分母の√が簡単にならない */
                    return <Text text={'√'+this.state.var3/this.keep+'/√'+this.state.var1/this.keep}></Text>
                }
            }
        }
    }else{/*約分できない */
        this.keep1=101;
        for(var j=2;j<100;j++){
            if(this.state.var3==(j*j)){
                break;
            }if(this.state.var3%(j*j)==0){
                this.keep1=j;
            }
        }
        this.keep2=101;
        for(var k=2;k<100;k++){
            if(this.state.var1==(k*k)){
                break;
            }if(this.state.var1%(k*k)==0){
                this.keep2=k;
            }
        }
        if(this.state.var1==1){/*分母が１のとき */
            if(this.keep1!=101){/*分子のルートが簡単にできる */
                if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                    return <Text text={this.keep1}></Text>
                }else{/*分子のルートが簡単にできるけど√が残る */
                    return <Text text={this.keep1+"√"+this.state.var3/(this.keep1*this.keep1)}></Text>
                }
            }else{/*分子の√が簡単にできない */
                return <Text text={'√'+this.state.var3}></Text>
            }
        }else{/*分母が1でない */
            if(this.keep1!=101){/*分子のルートが簡単にできる */
                if(this.keep2!=101){/*分母のルートが簡単にできる */
                    if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                        if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                            return <Text text={this.keep1+'/'+this.keep2}></Text>
                        }else{/*分母のルートが消えない */
                            return <Text text={this.keep1+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)}></Text>
                        }
                    }else{/*分子のルートが消えない */
                        if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                            return <Text text={this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/'+this.keep2}></Text>
                        }else{/*分母のルートが消えない */
                            return <Text text={this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)}></Text>
                        }
                    }
                }else{/*分母のルートが簡単にできない */
                    if(this.state.var3/(this.keep1*this.keep1)==1){/*分子のルートが消える */
                        return <Text text={this.keep1+'/√'+this.state.var1}></Text>
                    }else{/*分子のルートが消えない */
                        return <Text text={this.keep1+'√'+this.state.var3/(this.keep1*this.keep1)+'/√'+this.state.var1}></Text>
                    }
                }
            }else{/*分子のルートが簡単にできない */
                if(this.keep2!=101){/*分母の√の中身が簡単にできる */
                    if(this.state.var1/(this.keep2*this.keep2)==1){/*分母のルートが消える */
                        return <Text text={'√'+this.state.var3+'/'+this.keep2}></Text>
                    }else{/*分母のルートが消えない */
                        return <Text text={'√'+this.state.var3+'/'+this.keep2+'√'+this.state.var1/(this.keep2*this.keep2)}></Text>
                    }
                }else{
                    return <Text text={'√'+this.state.var3+'/√'+this.state.var1}></Text>
                }
            }
        }
    }
}
