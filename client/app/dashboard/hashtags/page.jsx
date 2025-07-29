import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Hash, Plus, TrendingUp, Eye, MoreHorizontal, Search } from "lucide-react"

export default function HashtagsPage() {
  const hashtags = [
    {
      id: 1,
      hashtag: "#SaaS",
      posts: 1247,
      engagement: 89.2,
      trend: "up",
      status: "active",
      lastUpdate: "2 min ago",
    },
    {
      id: 2,
      hashtag: "#Analytics",
      posts: 856,
      engagement: 76.8,
      trend: "up",
      status: "active",
      lastUpdate: "5 min ago",
    },
    {
      id: 3,
      hashtag: "#TechStartup",
      posts: 2341,
      engagement: 45.6,
      trend: "down",
      status: "active",
      lastUpdate: "1h ago",
    },
    {
      id: 4,
      hashtag: "#Growth",
      posts: 634,
      engagement: 67.3,
      trend: "up",
      status: "paused",
      lastUpdate: "3h ago",
    },
    {
      id: 5,
      hashtag: "#SocialMedia",
      posts: 3456,
      engagement: 92.1,
      trend: "up",
      status: "active",
      lastUpdate: "10 min ago",
    },
    {
      id: 6,
      hashtag: "#AI",
      posts: 1876,
      engagement: 58.9,
      trend: "up",
      status: "active",
      lastUpdate: "30 min ago",
    },
  ]

  const categories = [
    { name: "All", count: 24 },
    { name: "Active", count: 18 },
    { name: "Paused", count: 4 },
    { name: "High Volume", count: 8 },
    { name: "Trending", count: 12 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Hashtags</h1>
          <p className="text-gray-400">Manage and monitor your tracked hashtags</p>
        </div>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Hashtag
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search hashtags..."
            className="pl-10 bg-black border-gray-800 text-white placeholder:text-gray-500 focus:border-orange-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="border-gray-800 text-gray-400 hover:bg-gray-950 whitespace-nowrap bg-black"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Hashtags</p>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
              <Hash className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Posts</p>
                <p className="text-2xl font-bold text-white">12.4K</p>
              </div>
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Avg Engagement</p>
                <p className="text-2xl font-bold text-white">73.2%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Active Tracking</p>
                <p className="text-2xl font-bold text-white">18</p>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                <Hash className="w-4 h-4 text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hashtags Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {hashtags.map((item) => (
          <Card key={item.id} className="bg-black border-gray-900 hover:bg-gray-950/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                    <Hash className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.hashtag}</h3>
                    <div className="flex items-center space-x-2">
                      <Badge
                        className={
                          item.status === "active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        }
                      >
                        {item.status}
                      </Badge>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                        {item.trend === "up" ? "↑" : "↓"} {item.trend === "up" ? "Trending" : "Declining"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Posts Tracked</span>
                  <span className="text-white font-medium">{item.posts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Engagement Rate</span>
                  <span className="text-white font-medium">{item.engagement}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Last Update</span>
                  <span className="text-white font-medium">{item.lastUpdate}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  View Posts
                </Button>
                <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
