const repo = {
    name: "LaunchX",
    author: "JaimeEsqueda",
    language: "JavaScript",
    numberOfCommits: 88,
    stars: 989,
    forks: 323,
    issues_open: 8,
    issues_close: 8,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}\n`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())


   // Modularizando los issue

   const issue = {
    title: "IssueNameFound",
    repositoryNameAssociated: "Playbook",
    status: "In process",
    numberOfComments: 237,
    labels: 345,
    author: "JaimeEsqueda",
    dateCreated: 'July 29th',
    lastUpdated: 'July 29th',
    getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This issue found is ${this.title} was created by ${this.author}\nThe last updated was on ${this.lastUpdated}\n`
    }
   }

   console.log("Nombre del issue:" + issue.title)
   console.log("Nombre y autor del issue: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())

   // Modularizando PullRequest

   const PullRequest = {
    title: "Pull request",
    branchName: "Main",
    dateCreated: 'July 29th',
    status: "Approved",
    repositoryNameAssociated: "Playbook",
    author: "JaimeEsqueda",
    getStatus: function(){
      return this.title + this.status
    },
    getTitleAndAutor: function(){
      return `This Pull request is ${this.title} was created by ${this.author}\nThe status is ${this.status}\n`
    }
   }

   console.log("Nombre del pull request:" + PullRequest.title)
   console.log("Estatus del pull request: " + PullRequest.getStatus())
   console.log(PullRequest.getTitleAndAutor())

      // Modularizando Twitter

      const Twitter = {
        user: "Jaime",
        Username: "JaimeEsqueda",
        bio: ' Industrial statistic on the infomatic enviroment ',
        age : 25,
        trending_topic: " Informatics topics, games and books. ",
        hashtag: "Launchx",
        getuserandtrends: function(){
          return this.Username + this.trending_topic
        },
        getUsernameAndHashtag: function(){
          return `twitter ${this.Username} #${this.hashtag}\n`
        }
       }
    
       console.log("Nombre del propietario del twitter " + Twitter.user)
       console.log("This twitter has the trending topics like " + Twitter.getuserandtrends())
       console.log(Twitter.getUsernameAndHashtag())
       
      // Modularizando Facebook

      const Facebook = {
        user: "Jaime",
        Username: "JaimeEsqueda",
        bio: ' Industrial statistic on the infomatic enviroment ',
        age : 25,
        trending_topic: " Informatics topics, games and books. ",
        pages: " GoodVibes and technologies ",
        getuserandpages: function(){
          return this.Username + this.pages
        }
       }
    
       console.log("Nombre del propietario del Facebook " + Facebook.user)
          console.log("This Facebook has the trending topics like " + Facebook.getuserandpages() + '\n')
       
      // Modularizando Twitter

      const Uber = {
        user: "Jaime",
        Username: "JaimeEsqueda",
        trips: 98,
        Ranked : 4.9,
        address: "Colonia Ojocaliente 1",
        coupons: "Free trip upper 10KM",
        getuserandtrips: function(){
          return this.Username +' number trips:' + this.trips
        },
        getinfouseronuber: function(){
          return `Name ${this.Username} #trips${this.trips}\nRanked ${this.Ranked} address ${this.address}`
        }
       }
    
       console.log("Nombre del propietario del Uber " + Uber.Username)
       console.log("This uber is owned of " + Uber.getuserandtrips())
       console.log(Uber.getinfouseronuber())