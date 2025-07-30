import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Hash, Bell, Clock, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ background: "black", color: "white" }}>
      {/* Header */}
      <header className="border-b border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Starlo-aiits</span>
            </div>
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton>
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-900">
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                  afterSignOutUrl="/"
                />
                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">
            Social Media Intelligence
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Spy on Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Competitors
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Track hashtags, monitor competitor posts, and stay ahead with real-time social media intelligence. Never
            miss an opportunity to engage with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-900 bg-black">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Everything You Need to Monitor Social Media
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hash,
                title: "Hashtag Tracking",
                description: "Monitor multiple hashtags and get real-time updates on the latest posts and trends.",
              },
              {
                icon: Eye,
                title: "Competitor Monitoring",
                description: "Keep tabs on your competitors' social media activity and engagement strategies.",
              },
              {
                icon: Bell,
                title: "Smart Alerts",
                description: "Get notified instantly when important conversations happen in your tracked hashtags.",
              },
              {
                icon: Clock,
                title: "Post History",
                description: "Access comprehensive history of all tracked posts with advanced filtering options.",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your data is encrypted and secure. We prioritize your privacy and data protection.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Real-time updates and instant notifications keep you ahead of the competition.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-black border-gray-800 hover:bg-gray-950 transition-colors"
                style={{ background: "black" }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Monitoring?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Starlo-aiits to stay ahead of their competition.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            >
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-black">
        <div className="container mx-auto text-center text-gray-300">
          <p>&copy; 2024 Starlo-aiits. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
