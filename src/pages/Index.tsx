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
            onClick={() => window.open('https://t.me/+Qhg9tGuw1axjYTZi', '_blank')}
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
                onClick={() => window.open('https://t.me/+Qhg9tGuw1axjYTZi', '_blank')}
              >
                <Icon name="Gift" size={24} className="mr-2" />
                Участвовать в конкурсах
              </Button>
            </div>
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
                onClick={() => window.open('https://t.me/+Qhg9tGuw1axjYTZi', '_blank')}
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
                  onClick={() => window.open('https://t.me/+Qhg9tGuw1axjYTZi', '_blank')}
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