import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TrendingUp, TrendingDown, Eye, MessageCircle, Heart, Share2, Hash, Bell } from "lucide-react"

export default function Dashboard() {
  const stats = [
    { title: "Total Hashtags", value: "24", change: "+12%", trend: "up", icon: Hash },
    { title: "Active Alerts", value: "156", change: "+8%", trend: "up", icon: Bell },
    { title: "Posts Monitored", value: "2,847", change: "-3%", trend: "down", icon: Eye },
    { title: "Engagement Rate", value: "4.2%", change: "+15%", trend: "up", icon: Heart },
  ]

  const recentPosts = [
    {
      id: 1,
      username: "@techstartup",
      content: "Just launched our new AI-powered analytics dashboard! 🚀 #SaaS #Analytics #TechStartup",
      hashtags: ["#SaaS", "#Analytics", "#TechStartup"],
      engagement: { likes: 342, comments: 28, shares: 15 },
      time: "2h ago",
      platform: "Twitter",
    },
    {
      id: 2,
      username: "@competitor_co",
      content:
        "Our Q3 results are in and we're thrilled with the growth! Thank you to our amazing customers 💙 #Growth #SaaS",
      hashtags: ["#Growth", "#SaaS"],
      engagement: { likes: 189, comments: 12, shares: 8 },
      time: "4h ago",
      platform: "LinkedIn",
    },
    {
      id: 3,
      username: "@industry_leader",
      content:
        "The future of social media monitoring is here. AI-driven insights that actually matter. #SocialMedia #AI",
      hashtags: ["#SocialMedia", "#AI"],
      engagement: { likes: 567, comments: 45, shares: 23 },
      time: "6h ago",
      platform: "Twitter",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Monitor your social media intelligence in real-time</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-black border-gray-900 backdrop-blur-sm hover:bg-gray-950/50 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                    )}
                    <span className={`text-sm ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Posts */}
      <Card className="bg-black border-gray-900 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            Recent Posts from Tracked Hashtags
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              View All
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <div key={post.id} className="border-b border-gray-800 last:border-b-0 pb-6 last:pb-0">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-orange-500/20 text-orange-400">
                      {post.username.slice(1, 3).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-white font-medium">{post.username}</span>
                      <Badge variant="outline" className="border-orange-500/30 text-orange-400 text-xs">
                        {post.platform}
                      </Badge>
                      <span className="text-gray-400 text-sm">{post.time}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{post.content}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.hashtags.map((hashtag, i) => (
                        <Badge key={i} className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                          {hashtag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center space-x-6 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.engagement.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.engagement.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">{post.engagement.shares}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
