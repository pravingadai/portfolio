import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { ExternalLink, Home, MessageSquare, Briefcase, PlusCircle, LineChart, Calendar } from 'lucide-react';
import AIChat from '@/components/AIChat';

// Dashboard data
const skillsData = [
  { name: 'React', value: 85 },
  { name: 'Node.js', value: 80 },
  { name: 'TypeScript', value: 75 },
  { name: 'CSS/SASS', value: 90 },
  { name: 'MongoDB', value: 70 },
];

const progressData = [
  { name: 'Week 1', progress: 30 },
  { name: 'Week 2', progress: 45 },
  { name: 'Week 3', progress: 60 },
  { name: 'Week 4', progress: 85 },
];

const upcomingEvents = [
  { date: '2025-04-01', title: 'Tech Conference', type: 'conference' },
  { date: '2025-04-15', title: 'Project Deadline', type: 'deadline' },
  { date: '2025-05-05', title: 'Team Meeting', type: 'meeting' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Profile Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <Card className="p-6 bg-card dark:bg-card/80 rounded-xl shadow-neo">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                <img 
                  src="https://avatars.githubusercontent.com/u/1234567?v=4" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
                  }}
                />
              </div>
              <h2 className="text-xl font-bold text-foreground">Pravin Gadai</h2>
              <p className="text-primary dark:text-primary-foreground">Full Stack Developer</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Home size={16} /> Home
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Briefcase size={16} /> Portfolio
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <ExternalLink size={16} /> Resume
                </Button>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Quick Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground/80">Projects</span>
                  <span className="font-semibold text-foreground">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Blogs</span>
                  <span className="font-semibold text-foreground">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/80">Years Experience</span>
                  <span className="font-semibold text-foreground">5+</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Main Dashboard Content */}
        <div className="w-full md:w-3/4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Overview
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Skills
              </TabsTrigger>
              <TabsTrigger value="chat" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                AI Assistant
              </TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Progress Chart */}
                <Card className="p-6 bg-card dark:bg-card/80 rounded-xl shadow-neo">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-foreground">Progress</h3>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <LineChart size={16} /> Details
                    </Button>
                  </div>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="progress" fill="hsl(var(--primary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
                
                {/* Upcoming Events */}
                <Card className="p-6 bg-card dark:bg-card/80 rounded-xl shadow-neo">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-foreground">Upcoming Events</h3>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <Calendar size={16} /> View All
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-primary/10 dark:bg-primary/30 p-2 rounded">
                          <Calendar size={20} className="text-primary dark:text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{event.title}</h4>
                          <p className="text-sm text-foreground/80">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </p>
                          <p className="text-xs text-primary dark:text-primary-foreground capitalize">{event.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              
              {/* Project Summary */}
              <Card className="p-6 bg-card dark:bg-card/80 rounded-xl shadow-neo">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Recent Projects</h3>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <PlusCircle size={16} /> Add New
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="p-4 bg-background dark:bg-background/80 rounded-lg border border-border">
                      <h4 className="font-medium text-foreground">Project {item}</h4>
                      <p className="text-sm text-foreground/80 my-2">
                        A short description about this project and what technologies were used.
                      </p>
                      <div className="flex justify-between">
                        <span className="text-xs text-primary dark:text-primary-foreground">In Progress</span>
                        <Button variant="link" size="sm" className="p-0 h-auto">View</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            {/* Skills Tab */}
            <TabsContent value="skills">
              <Card className="p-6 bg-card dark:bg-card/80 rounded-xl shadow-neo">
                <h3 className="text-lg font-semibold text-foreground mb-4">Skills Proficiency</h3>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillsData} layout={screenSize < 768 ? "vertical" : "horizontal"}>
                      <CartesianGrid strokeDasharray="3 3" />
                      {screenSize < 768 ? (
                        <>
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" width={100} />
                        </>
                      ) : (
                        <>
                          <XAxis dataKey="name" />
                          <YAxis />
                        </>
                      )}
                      <Tooltip />
                      <Bar dataKey="value" fill="hsl(var(--primary))" label={{ position: 'top' }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-foreground/80">{skill.value}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            {/* AI Assistant Tab */}
            <TabsContent value="chat">
              <Card className="p-6 bg-card dark:bg-card/80 rounded-xl shadow-neo h-[600px]">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">AI Assistant</h3>
                </div>
                
                <div className="h-full">
                  <AIChat />
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}