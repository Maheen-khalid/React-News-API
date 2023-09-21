import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    article =[{
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Steve Dent",
        "title": "Apple's new AirPods Pro with USB-C charging case are already $50 off",
        "description": "With the big switch to USB-C on the iPhone 15, Apple also made the same change to its latest AirPods Pro wireless ANC headphones, with a USB-C charging case. They only just came out over a week ago, but you can already grab them on sale for $200 at Amazon — a…",
        "url": "https://www.engadget.com/apples-new-airpods-pro-with-usb-c-charging-case-are-already-50-off-104504086.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ghhr_LMvVK98AKqtoIinzw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Mzk-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/bb46bae0-5865-11ee-93fd-acf79945413a",
        "publishedAt": "2023-09-21T10:45:04Z",
        "content": "With the big switch to USB-C on the iPhone 15, Apple also made the same change to its latest AirPods Pro wireless ANC headphones, with a USB-C charging case. They only just came out over a week ago, … [+1735 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Mat Smith",
        "title": "The Morning After: Amazon turns Alexa into a more conversational chatbot for your home",
        "description": "Amid a barrage of Amazon-branded tablets and Alexa-powered tech, Dave Limp, SVP of Amazon Devices and Services, announced the company’s digital assistant will soon tap into a purpose-built large language model (LLM) for almost every new Echo device.\nAmazon se…",
        "url": "https://www.engadget.com/the-morning-after-amazon-turns-alexa-into-a-more-conversational-chatbot-for-your-home-111539413.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/n6J5m0fsy24fKLsnqBg70w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/cd527400-57c9-11ee-99f9-de472f0c3bee",
        "publishedAt": "2023-09-21T11:15:39Z",
        "content": "Amid a barrage of Amazon-branded tablets and Alexa-powered tech, Dave Limp, SVP of Amazon Devices and Services, announced the companys digital assistant will soon tap into a purpose-built large langu… [+3728 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Android Central"
        },
        "author": "christinep2424@gmail.com (Christine Persaud)",
        "title": "iPhone 15 vs Samsung Galaxy S23",
        "description": "The iPhone 15 and Samsung Galaxy S23 are both premium phones in the respective brands' line-ups that have similar features. Here, we'll help you choose.",
        "url": "https://www.androidcentral.com/phones/iphone-15-vs-samsung-galaxy-s23",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/AcE3WWe6YLoBAPmnBL7tn8-1200-80.jpg",
        "publishedAt": "2023-09-21T06:44:46Z",
        "content": "The Apple iPhone 15 vs. Samsung Galaxy S23 sounds like a simple decision: if you love Apple and use other Apple products, the iPhone 15 is the logical choice. Conversely, if you prefer Android, and e… [+14294 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "WSJ: Apple's 5G Modem Prototypes 'Three Years Behind Qualcomm's Best Chip'",
        "description": "In the last few years, Apple has spent billions of dollars attempting to develop its own modem chip to replace the Qualcomm modem chips that it uses in iPhones, but a new paywalled Wall Street Journal report suggests Apple's approach to the project has been d…",
        "url": "https://www.macrumors.com/2023/09/21/apple-wsj-5gm-modem-project-challenges/",
        "urlToImage": "https://images.macrumors.com/t/7FWh5ByskU5VH_lm9RuaVIWhCbs=/1810x/article-new/2021/05/Apple-5G-Modem-Feature-Triad.jpg",
        "publishedAt": "2023-09-21T07:57:07Z",
        "content": "In the last few years, Apple has spent billions of dollars attempting to develop its own modem chip to replace the Qualcomm modem chips that it uses in iPhones, but a new paywalled Wall Street Journa… [+3186 chars]"
        }]
    constructor(){
        super();
        this.state={
            article:this.article,
            loading:false
        }
    }
      async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a592196c4204761b0dc8c10f8b456d6"
        let data = await fetch(url);
        let parsedData = await data.json()
          this.setState({article : parsedData.articles})
    }



  render() {
    return (
      <div>
        <div className='container'>
            <h2 className=' my-5'>Latest News  _______________</h2>
          
            <div className='row px-5'>
            {this.state.article.map((element)=>{
               return <div key={element.url} className='col-4'>
               <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
    imageUrl={!element.urlToImage?"https://i.ytimg.com/vi/u6t29XNVK08/maxresdefault.jpg": element.urlToImage} newsurl ={element.url}/>
                <br></br>
           
               </div>
                })}           
            </div>
            
        </div>
       
        
      </div>
     
    )
  }
}
