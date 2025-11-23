import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'scripts' | 'bots';
  features: string[];
  popular?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Auto-Poster Pro',
    description: 'Автоматическая публикация постов в группы ВК с расписанием',
    price: 1499,
    category: 'scripts',
    features: ['Отложенный постинг', 'Множественные группы', 'Статистика'],
    popular: true,
  },
  {
    id: 2,
    name: 'Mass Invite Script',
    description: 'Массовая рассылка приглашений в друзья и группы',
    price: 999,
    category: 'scripts',
    features: ['Фильтры аудитории', 'Анти-бан защита', 'Отчеты'],
  },
  {
    id: 3,
    name: 'Analytics Tracker',
    description: 'Углубленная аналитика активности в группах ВК',
    price: 1299,
    category: 'scripts',
    features: ['Графики роста', 'Экспорт данных', 'Сравнение групп'],
  },
  {
    id: 4,
    name: 'ChatBot Ultimate',
    description: 'Умный чат-бот с ИИ для автоматических ответов в группах',
    price: 2499,
    category: 'bots',
    features: ['GPT интеграция', 'Обучаемый', 'База знаний'],
    popular: true,
  },
  {
    id: 5,
    name: 'Moderation Bot',
    description: 'Автоматическая модерация сообщений и контента',
    price: 1799,
    category: 'bots',
    features: ['Фильтр мата', 'Авто-бан', 'Логи действий'],
  },
  {
    id: 6,
    name: 'Music Bot Pro',
    description: 'Бот для воспроизведения музыки в беседах ВК',
    price: 1199,
    category: 'bots',
    features: ['Плейлисты', 'Поиск треков', 'Качество 320kbps'],
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState<'all' | 'scripts' | 'bots'>('all');

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(10, 10, 15, 0.95) 0%, rgba(10, 10, 15, 1) 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://cdn.poehali.dev/projects/35d1d231-8e0e-4076-a88b-5314037793a9/files/cf02a9f7-205d-4c58-9385-d6f1c97592b7.jpg" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-black text-primary mb-4 text-glow animate-fade-in">
              By.Babushkin
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              Профессиональные скрипты и боты для ВКонтакте
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="hover-glow bg-primary text-primary-foreground">
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover-glow">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Поддержка
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-card/50 backdrop-blur border-primary/30 hover-glow">
              <CardHeader>
                <Icon name="Zap" className="w-12 h-12 text-primary mb-2" />
                <CardTitle>Быстрая автоматизация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Экономьте время с готовыми решениями для ВК
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/30 hover-glow">
              <CardHeader>
                <Icon name="Shield" className="w-12 h-12 text-secondary mb-2" />
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Защита от блокировок и встроенная анти-бан система
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/30 hover-glow">
              <CardHeader>
                <Icon name="Headphones" className="w-12 h-12 text-accent mb-2" />
                <CardTitle>24/7 Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Помощь в настройке и использовании в любое время
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-glow">
          Наши продукты
        </h2>

        <Tabs defaultValue="all" className="w-full" onValueChange={(v) => setActiveTab(v as any)}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card/50">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Все
            </TabsTrigger>
            <TabsTrigger value="scripts" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Скрипты
            </TabsTrigger>
            <TabsTrigger value="bots" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Боты
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="bg-card border-border hover-glow relative overflow-hidden group"
                >
                  {product.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-accent text-accent-foreground">
                        <Icon name="Star" className="mr-1" size={14} />
                        Популярно
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`p-3 rounded-lg ${product.category === 'scripts' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                        <Icon 
                          name={product.category === 'scripts' ? 'Code' : 'Bot'} 
                          className={product.category === 'scripts' ? 'text-primary' : 'text-secondary'}
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {product.category === 'scripts' ? 'Скрипт' : 'Бот'}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground">Возможности:</p>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Icon name="Check" className="text-primary mr-2" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-primary">{product.price}₽</p>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover-glow">
                      <Icon name="ShoppingCart" className="mr-2" size={18} />
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="border-t border-border bg-card/30 backdrop-blur mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">By.Babushkin</h3>
              <p className="text-muted-foreground">
                Лучшие решения для автоматизации ВКонтакте
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  support@babushkin.com
                </p>
                <p className="flex items-center">
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  Telegram: @babushkin_shop
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Способы оплаты</h4>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Карты РФ</Badge>
                <Badge variant="outline">СБП</Badge>
                <Badge variant="outline">Crypto</Badge>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 By.Babushkin. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
