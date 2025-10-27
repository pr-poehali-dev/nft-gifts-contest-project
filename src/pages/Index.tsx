import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 pointer-events-none" />
      
      <div className="relative">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow">
              <Icon name="Gift" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NFT Gifts X
            </h1>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            onClick={() => window.open('https://t.me/nftx', '_blank')}
          >
            <Icon name="Send" size={20} className="mr-2" />
            Telegram NFT X
          </Button>
        </header>

        <section className="container mx-auto px-4 pt-20 pb-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Выигрывайте эксклюзивные
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-glow">
                NFT подарки
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Участвуйте в конкурсах, собирайте уникальные цифровые активы и станьте частью NFT-сообщества
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/nftx', '_blank')}
              >
                <Icon name="Gift" size={24} className="mr-2" />
                Участвовать в конкурсах
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
                onClick={() => document.getElementById('contests')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
                <Icon name="ArrowDown" size={20} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/55d8046f-bd39-44a0-821d-261c4751a210/files/44c38fc5-bfc9-4382-9502-9e54ac74f505.jpg" 
              alt="NFT Background" 
              className="rounded-2xl shadow-2xl animate-scale-in"
            />
          </div>
        </section>

        <section id="contests" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Актуальные конкурсы
            </h3>
            <p className="text-xl text-muted-foreground">
              Выбирайте конкурс и выигрывайте уникальные NFT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/projects/55d8046f-bd39-44a0-821d-261c4751a210/files/0b20e9a9-f954-4bda-a0c5-afb42359b008.jpg" 
                  alt="NFT Gift" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Trophy" size={24} />
                  <h4 className="text-2xl font-bold">Mystery Box</h4>
                </div>
                
                <p className="text-muted-foreground">
                  Откройте загадочный бокс и получите случайный NFT из коллекции. Призовой фонд: 50+ уникальных NFT
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Users" size={16} />
                  <span>1,234 участников</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => window.open('https://t.me/nftx', '_blank')}
                >
                  Участвовать
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/projects/55d8046f-bd39-44a0-821d-261c4751a210/files/d1fa1904-1e09-47df-bd2d-c39abb334004.jpg" 
                  alt="Contest Prize" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-secondary">
                  <Icon name="Sparkles" size={24} />
                  <h4 className="text-2xl font-bold">Grand Prize</h4>
                </div>
                
                <p className="text-muted-foreground">
                  Главный конкурс месяца! Выигрывайте эксклюзивные NFT стоимостью до $5,000. Один победитель получит всё
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Users" size={16} />
                  <span>5,678 участников</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90"
                  onClick={() => window.open('https://t.me/nftx', '_blank')}
                >
                  Участвовать
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="mb-6 flex items-center justify-center h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                <Icon name="Calendar" size={80} className="text-primary" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Zap" size={24} />
                  <h4 className="text-2xl font-bold">Daily Drop</h4>
                </div>
                
                <p className="text-muted-foreground">
                  Ежедневные розыгрыши NFT! Новый конкурс каждый день в 12:00 UTC. Быстрая регистрация за 1 клик
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Users" size={16} />
                  <span>892 участников</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => window.open('https://t.me/nftx', '_blank')}
                >
                  Участвовать
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold">
              Как начать участвовать?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold">Перейдите в Telegram</h4>
                <p className="text-muted-foreground">
                  Нажмите на кнопку и присоединяйтесь к нашему каналу NFT X
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold">Выберите конкурс</h4>
                <p className="text-muted-foreground">
                  Изучите активные конкурсы и выберите тот, который вам нравится
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold">Выиграйте NFT</h4>
                <p className="text-muted-foreground">
                  Следуйте инструкциям и получите шанс выиграть уникальный NFT
                </p>
              </div>
            </div>

            <div className="pt-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 text-xl px-12 py-7"
                onClick={() => window.open('https://t.me/nftx', '_blank')}
              >
                <Icon name="Send" size={24} className="mr-2" />
                Присоединиться к NFT X
              </Button>
            </div>
          </div>
        </section>

        <footer className="border-t border-border mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Gift" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  NFT Gifts X
                </span>
              </div>
              
              <p className="text-muted-foreground text-center">
                © 2025 NFT Gifts X. Все права защищены
              </p>
              
              <div className="flex gap-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:text-primary transition-colors"
                  onClick={() => window.open('https://t.me/nftx', '_blank')}
                >
                  <Icon name="Send" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
