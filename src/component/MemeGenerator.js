import React,{Component} from "react"
class MemeGenerator extends Component {
    constructor(){
      super();
      this.state={
          topText:"",
          bottomText:"",
          randomImg:"http://i.imgflip.com/1bij.jpg",
          allMemeImgs:[]
      }
      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)

    }
    componentDidMount(){
          fetch("https://api.imgflip.com/get_memes")
          .then((response)=>response.json())
          .then((response)=>{
            const {memes} = response.data
            console.log(memes)
            this.setState({allMemeImgs: memes})
            console.log(this.state.allMemeImgs[0])
           })
    }

    handleChange(event) {
        const {name, value}=event.target
        this.setState({
          [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const meme = this.state.allMemeImgs[randNum]
        this.setState({randomImg : meme.url})
    }
    render(){
        return(
            <div>
              <form className="meme-form" onSubmit={this.handleSubmit}> 
                <input 
                type="text"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
                />
                <input 
                  type="text"
                  name="bottomText"
                  placeholder="Bottom Text"
                  value={this.state.bottomText}
                  onChange={this.handleChange}
                />
                <button>Gen</button>
              </form>
              <div className="meme">
                <img src={this.state.randomImg} alt="Random image" />
                  <h2 className="top">{this.state.topText}</h2>
                  <h2 className="bottom">{this.state.bottomText}</h2>
              </div>
            </div>
          
        )
    }
}

export default MemeGenerator
