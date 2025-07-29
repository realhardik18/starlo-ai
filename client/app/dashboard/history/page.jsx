import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Search, Filter, Download, Heart, MessageCircle, Share2, Clock } from "lucide-react"

export default function HistoryPage() {
  const historyPosts = [
    {
      id: 1,
      username: "@techstartup",
      content:
        "Just launched our new AI-powered analytics dashboard! 🚀 The response has been incredible so far. Thank you to everyone who supported us!",
      hashtags: ["#SaaS", "#Analytics", "#TechStartup"],
      platform: "Twitter",
      engagement: { likes: 342, comments: 28, shares: 15 },
      time: "2024-01-15 14:30",
      monitored: "2h ago",
    },
    {
      id: 2,
      username: "@competitor_co",
      content:
        "Our Q3 results are in and we're thrilled with the growth! 📈 Revenue up 150% YoY. Here's what we learned along the way...",
      hashtags: ["#Growth", "#SaaS", "#Business"],
      platform: "LinkedIn",
      engagement: { likes: 189, comments: 12, shares: 8 },
      time: "2024-01-15 10:15",
      monitored: "4h ago",
    },
    {
      id: 3,
      username: "@industry_leader",
      content:
        "The future of social media monitoring is here. AI-driven insights that actually matter. Stop drowning in data, start swimming in insights 🏊‍♂️",
      hashtags: ["#SocialMedia", "#AI", "#Insights"],
      platform: "Twitter",
      engagement: { likes: 567, comments: 45, shares: 23 },
      time: "2024-01-15 09:45",
      monitored: "6h ago",
    },
    {
      id: 4,
      username: "@startup_guru",
      content: "5 lessons learned from scaling from 0 to $10M ARR in 18 months. Thread 🧵",
      hashtags: ["#Startup", "#Growth", "#Lessons"],
      platform: "Twitter",
      engagement: { likes: 1234, comments: 89, shares: 156 },
      time: "2024-01-14 16:22",
      monitored: "1d ago",
    },
    {
      id: 5,
      username: "@saas_founder",
      content:
        "Product-market fit isn't a destination, it's a journey. Here's how we're constantly iterating based on customer feedback...",
      hashtags: ["#ProductMarketFit", "#SaaS", "#CustomerFeedback"],
      platform: "LinkedIn",
      engagement: { likes: 445, comments: 67, shares: 34 },
      time: "2024-01-14 11:30",
      monitored: "1d ago",
    },
  ]

  const platforms = ["All", "Twitter", "LinkedIn", "Instagram", "TikTok"]
  const timeRanges = ["All Time", "Today", "This Week", "This Month", "Last 3 Months"]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">History</h1>
          <p className="text-gray-400">Browse your complete social media monitoring history</p>
        </div>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-black border-gray-900">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search posts, usernames, or content..."
                  className="pl-10 bg-black border-gray-800 text-white placeholder:text-gray-500 focus:border-orange-500"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="px-3 py-2 bg-black border border-gray-800 rounded-md text-white focus:border-orange-500 outline-none">
                <option>All Platforms</option>
                {platforms.map((platform) => (
                  <option key={platform} value={platform.toLowerCase()}>
                    {platform}
                  </option>
                ))}
              </select>
              <select className="px-3 py-2 bg-black border border-gray-800 rounded-md text-white focus:border-orange-500 outline-none">
                <option>All Time</option>
                {timeRanges.map((range) => (
                  <option key={range} value={range.toLowerCase()}>
                    {range}
                  </option>
                ))}
              </select>
              <Button variant="outline" className="border-gray-800 text-gray-400 hover:bg-gray-950 bg-black">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Posts</p>
                <p className="text-2xl font-bold text-white">2,847</p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">This Week</p>
                <p className="text-2xl font-bold text-white">156</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Avg Engagement</p>
                <p className="text-2xl font-bold text-white">4.2K</p>
              </div>
              <Heart className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Top Platform</p>
                <p className="text-2xl font-bold text-white">Twitter</p>
              </div>
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 font-bold text-sm">T</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Posts History */}
      <Card className="bg-black border-gray-900">
        <CardHeader>
          <CardTitle className="text-white">Post History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {historyPosts.map((post) => (
              <div key={post.id} className="border-l-2 border-orange-500/30 pl-6 pb-6 relative">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-orange-500 rounded-full"></div>
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
                      <span className="text-gray-400 text-sm">Posted: {post.time}</span>
                      <span className="text-gray-500 text-xs">Monitored: {post.monitored}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{post.content}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.hashtags.map((hashtag, i) => (
                        <Badge key={i} className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                          {hashtag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
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
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-800 text-gray-400 hover:bg-gray-950 bg-black"
                        >
                          View Original
                        </Button>
                        <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-gray-800 text-gray-400 hover:bg-gray-950 bg-black">
              Load More Posts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
