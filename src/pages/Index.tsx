import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [aiPrompt, setAiPrompt] = useState('');

  const components = [
    { id: 'hero', name: 'Hero Section', icon: 'Sparkles', category: 'layout' },
    { id: 'navbar', name: 'Navigation', icon: 'Menu', category: 'layout' },
    { id: 'card', name: 'Card', icon: 'Square', category: 'content' },
    { id: 'button', name: 'Button', icon: 'MousePointer', category: 'interactive' },
    { id: 'form', name: 'Form', icon: 'FileText', category: 'interactive' },
    { id: 'footer', name: 'Footer', icon: 'Layout', category: 'layout' },
  ];

  const templates = [
    { id: '1', name: 'Landing Page', image: '🌐', type: 'Website' },
    { id: '2', name: 'Discord Bot', image: '🤖', type: 'Bot' },
    { id: '3', name: 'E-commerce', image: '🛒', type: 'Website' },
    { id: '4', name: 'Portfolio', image: '💼', type: 'Website' },
  ];

  const projects = [
    { id: '1', name: 'My Landing', updated: '2 часа назад', status: 'active' },
    { id: '2', name: 'Discord Music Bot', updated: '1 день назад', status: 'draft' },
    { id: '3', name: 'Shop Website', updated: '3 дня назад', status: 'active' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                BuilderPro
              </h1>
              <div className="hidden md:flex gap-6">
                <button
                  onClick={() => setActiveSection('home')}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Главная
                </button>
                <button
                  onClick={() => setActiveSection('constructor')}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === 'constructor' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Конструктор
                </button>
                <button
                  onClick={() => setActiveSection('projects')}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Проекты
                </button>
                <button
                  onClick={() => setActiveSection('templates')}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === 'templates' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Шаблоны
                </button>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Документация
                </button>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Сообщество
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Войти
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600">
                Начать бесплатно
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="mb-6">
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                  🚀 Безлимитное создание проектов
                </Badge>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent leading-tight">
                Создавайте сайты и ботов за минуты
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональный конструктор с AI-ассистентом, drag & drop интерфейсом и готовыми шаблонами. 
                Без ограничений, полностью бесплатно.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  onClick={() => setActiveSection('constructor')}
                >
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Начать создание
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon name="Wand2" className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Ассистент</h3>
                <p className="text-gray-600">
                  Генерируйте код и дизайн с помощью искусственного интеллекта. Просто опишите, что нужно.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <Icon name="MousePointerClick" className="text-cyan-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Drag & Drop</h3>
                <p className="text-gray-600">
                  Создавайте интерфейсы перетаскиванием компонентов. Интуитивно и быстро.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Icon name="Rocket" className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Быстрый деплой</h3>
                <p className="text-gray-600">
                  Публикуйте проекты одним кликом. Автоматический хостинг и SSL сертификаты.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Icon name="GitBranch" className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Git интеграция</h3>
                <p className="text-gray-600">
                  Автоматическая синхронизация с GitHub. Полный контроль версий.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Icon name="Blocks" className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Библиотека компонентов</h3>
                <p className="text-gray-600">
                  Готовые UI компоненты и шаблоны для любых задач.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-pink-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Коллаборация</h3>
                <p className="text-gray-600">
                  Работайте в команде в реальном времени. Комментарии и правки.
                </p>
              </Card>
            </div>

            {/* Export Formats */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-center mb-8">Экспорт в любой формат</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['HTML', 'React', 'Vue', 'Angular', 'Svelte', 'Next.js'].map((format) => (
                  <Badge key={format} variant="outline" className="text-base py-2 px-4">
                    {format}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'constructor' && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Конструктор проектов</h2>
              <p className="text-gray-600">Создавайте с помощью drag & drop или AI ассистента</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 h-[calc(100vh-250px)]">
              {/* Left Sidebar - Components */}
              <Card className="lg:col-span-3 p-4 overflow-y-auto">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Boxes" size={18} />
                  Компоненты
                </h3>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1 text-xs">Все</TabsTrigger>
                    <TabsTrigger value="layout" className="flex-1 text-xs">Layout</TabsTrigger>
                    <TabsTrigger value="content" className="flex-1 text-xs">Content</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="space-y-2 mt-4">
                    {components.map((comp) => (
                      <div
                        key={comp.id}
                        className="p-3 border rounded-lg cursor-move hover:bg-blue-50 hover:border-blue-200 transition-colors"
                        draggable
                        onDragStart={() => setSelectedComponent(comp.id)}
                      >
                        <div className="flex items-center gap-2">
                          <Icon name={comp.icon as any} size={16} />
                          <span className="text-sm font-medium">{comp.name}</span>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="layout" className="space-y-2 mt-4">
                    {components.filter(c => c.category === 'layout').map((comp) => (
                      <div
                        key={comp.id}
                        className="p-3 border rounded-lg cursor-move hover:bg-blue-50 hover:border-blue-200 transition-colors"
                        draggable
                      >
                        <div className="flex items-center gap-2">
                          <Icon name={comp.icon as any} size={16} />
                          <span className="text-sm font-medium">{comp.name}</span>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="content" className="space-y-2 mt-4">
                    {components.filter(c => c.category === 'content' || c.category === 'interactive').map((comp) => (
                      <div
                        key={comp.id}
                        className="p-3 border rounded-lg cursor-move hover:bg-blue-50 hover:border-blue-200 transition-colors"
                        draggable
                      >
                        <div className="flex items-center gap-2">
                          <Icon name={comp.icon as any} size={16} />
                          <span className="text-sm font-medium">{comp.name}</span>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </Card>

              {/* Center - Canvas */}
              <Card className="lg:col-span-6 p-6 relative overflow-y-auto">
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <Button variant="outline" size="sm">
                    <Icon name="Monitor" size={16} className="mr-2" />
                    Desktop
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Tablet" size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Smartphone" size={16} />
                  </Button>
                </div>

                <div className="border-2 border-dashed rounded-lg min-h-[500px] mt-12 bg-white p-8 flex items-center justify-center">
                  {selectedComponent ? (
                    <div className="text-center animate-scale-in">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                        <Icon name="CheckCircle" className="text-blue-600" size={32} />
                      </div>
                      <p className="text-gray-600">Компонент добавлен: <span className="font-semibold">{selectedComponent}</span></p>
                      <p className="text-sm text-gray-500 mt-2">Перетащите сюда другие компоненты</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Icon name="MousePointerClick" className="text-gray-400 mx-auto mb-4" size={48} />
                      <p className="text-gray-600 font-medium mb-2">Перетащите компоненты сюда</p>
                      <p className="text-sm text-gray-500">или используйте AI ассистента справа</p>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Undo" size={16} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Redo" size={16} />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Предпросмотр
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600">
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Right Sidebar - AI Assistant */}
              <Card className="lg:col-span-3 p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icon name="Sparkles" className="text-white" size={16} />
                  </div>
                  <h3 className="font-semibold">AI Ассистент</h3>
                </div>

                <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-sm">
                    <p className="font-medium text-blue-900 mb-1">AI помощник готов! 🎉</p>
                    <p className="text-blue-700">Опишите, что нужно создать, и я сгенерирую код и дизайн.</p>
                  </div>
                  
                  {aiPrompt && (
                    <div className="bg-white border rounded-lg p-3 text-sm">
                      <p className="text-gray-700">{aiPrompt}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Textarea
                    placeholder="Например: Создай Hero секцию с кнопкой и изображением..."
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    disabled={!aiPrompt.trim()}
                  >
                    <Icon name="Sparkles" size={16} className="mr-2" />
                    Сгенерировать
                  </Button>
                </div>

                <div className="mt-4 pt-4 border-t space-y-2">
                  <p className="text-xs text-gray-500 font-medium">БЫСТРЫЕ КОМАНДЫ</p>
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    <Icon name="Layout" size={14} className="mr-2" />
                    Создать лендинг
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    <Icon name="ShoppingCart" size={14} className="mr-2" />
                    Добавить корзину
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    <Icon name="MessageSquare" size={14} className="mr-2" />
                    Форма обратной связи
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Мои проекты</h2>
                <p className="text-gray-600">Управляйте своими проектами</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новый проект
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Создать новый проект</DialogTitle>
                    <DialogDescription>
                      Выберите тип проекта для начала работы
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button variant="outline" className="h-24 flex-col">
                      <Icon name="Globe" size={32} className="mb-2" />
                      <span>Веб-сайт</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex-col">
                      <Icon name="Bot" size={32} className="mb-2" />
                      <span>Discord бот</span>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                      {project.name[0]}
                    </div>
                    <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                      {project.status === 'active' ? 'Активен' : 'Черновик'}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">Обновлён {project.updated}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Eye" size={14} className="mr-2" />
                      Открыть
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MoreVertical" size={14} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'templates' && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Шаблоны</h2>
              <p className="text-gray-600">Готовые решения для быстрого старта</p>
            </div>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">Все шаблоны</TabsTrigger>
                <TabsTrigger value="websites">Веб-сайты</TabsTrigger>
                <TabsTrigger value="bots">Боты</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-6xl">
                    {template.image}
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {template.type}
                    </Badge>
                    <h3 className="font-semibold mb-3">{template.name}</h3>
                    <Button className="w-full" variant="outline">
                      <Icon name="Copy" size={14} className="mr-2" />
                      Использовать
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2024 BuilderPro. Безлимитное создание проектов.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Документация</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Сообщество</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
