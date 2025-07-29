import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Clock, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react"

export default function AlertsPage() {
  const alerts = [
    {
      id: 1,
      type: "high_engagement",
      title: "High engagement detected",
      description: "Post from @competitor_co received 500+ likes in the last hour",
      hashtag: "#SaaS",
      time: "5 min ago",
      status: "new",
      priority: "high",
    },
    {
      id: 2,
      type: "new_mention",
      title: "New mention of tracked hashtag",
      description: "Your competitor mentioned #Analytics in a viral post",
      hashtag: "#Analytics",
      time: "15 min ago",
      status: "new",
      priority: "medium",
    },
    {
      id: 3,
      type: "trending",
      title: "Hashtag trending",
      description: "#TechStartup is trending in your industry",
      hashtag: "#TechStartup",
      time: "1h ago",
      status: "read",
      priority: "high",
    },
    {
      id: 4,
      type: "keyword_match",
      title: "Keyword match found",
      description: "Post contains multiple tracked keywords",
      hashtag: "#Growth",
      time: "2h ago",
      status: "read",
      priority: "low",
    },
    {
      id: 5,
      type: "competitor_activity",
      title: "Competitor activity spike",
      description: "@industry_leader posted 5 times in the last hour",
      hashtag: "#SocialMedia",
      time: "3h ago",
      status: "read",
      priority: "medium",
    },
  ]

  const getAlertIcon = (type) => {
    switch (type) {
      case "high_engagement":
        return TrendingUp
      case "trending":
        return TrendingUp
      case "new_mention":
        return Bell
      case "keyword_match":
        return AlertCircle
      case "competitor_activity":
        return Clock
      default:
        return Bell
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-red-500/30 text-red-400 bg-red-500/20"
      case "medium":
        return "border-orange-500/30 text-orange-400 bg-orange-500/20"
      case "low":
        return "border-green-500/30 text-green-400 bg-green-500/20"
      default:
        return "border-gray-500/30 text-gray-400 bg-gray-500/20"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Alerts</h1>
          <p className="text-gray-400">Stay updated with real-time notifications</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
            Mark All Read
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            Settings
          </Button>
        </div>
      </div>

      {/* Alert Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">New Alerts</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
              <Bell className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">High Priority</p>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Resolved Today</p>
                <p className="text-2xl font-bold text-white">8</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Card className="bg-black border-gray-900">
        <CardHeader>
          <CardTitle className="text-white">Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => {
              const Icon = getAlertIcon(alert.type)
              return (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border transition-colors hover:bg-gray-950/50 ${
                    alert.status === "new" ? "border-orange-500/30 bg-orange-500/5" : "border-gray-800 bg-gray-950/20"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${alert.status === "new" ? "bg-orange-500/20" : "bg-gray-700/50"}`}>
                      <Icon className={`w-5 h-5 ${alert.status === "new" ? "text-orange-400" : "text-gray-400"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-medium">{alert.title}</h3>
                        <Badge className={getPriorityColor(alert.priority)}>{alert.priority}</Badge>
                        {alert.status === "new" && (
                          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">New</Badge>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{alert.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{alert.hashtag}</span>
                        <span>{alert.time}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                      >
                        View
                      </Button>
                      {alert.status === "new" && (
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          Mark Read
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
