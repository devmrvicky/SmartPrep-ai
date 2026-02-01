import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  BookOpen,
  TrendingUp,
  Trophy,
  LogOut,
  User,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Logo from "@/components/utils/Logo";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const stats = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      label: "Mock Tests Taken",
      value: "12",
      change: "+3 this week",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      label: "Study Hours",
      value: "24.5",
      change: "+5.2 this week",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      label: "Average Score",
      value: "78%",
      change: "+12% improvement",
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-600" />,
      label: "Rank",
      value: "#234",
      change: "Top 5%",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo />
            </Link>

            <div className="flex items-center gap-4">
              <DarkModeToggle />

              {/* User Menu */}
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.name || "User"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-gray-600 dark:text-gray-400"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.name?.split(" ")[0] || "Student"}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's your progress overview. Keep up the great work!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Continue Learning */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Continue Learning
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    General Intelligence & Reasoning
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-4">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      65%
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Resume Learning
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tests */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Upcoming Mock Tests
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Full Length Test #13
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Tomorrow, 10:00 AM
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="dark:border-gray-600 dark:text-white"
                  >
                    Start
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Reasoning Practice
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Feb 5, 2:00 PM
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="dark:border-gray-600 dark:text-white"
                  >
                    Start
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">
                    Completed Mock Test #12
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Score: 85% • 2 hours ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">
                    Studied Mathematics
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    1.5 hours • Yesterday
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">
                    Rank improved to #234
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2 days ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
