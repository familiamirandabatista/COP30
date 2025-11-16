import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Globe,
  Leaf,
  TreePine,
  Factory,
  Users,
  Target,
  TrendingDown,
  Zap,
  Scale,
  BookOpen,
  ChevronDown,
  Menu,
} from "lucide-react";

import heroImage from "@assets/generated_images/Forest_preservation_vs_deforestation_c53988b1.png";
import amazonImage from "@assets/generated_images/Amazon_rainforest_aerial_view_19b94e45.png";
import worldMapImage from "@assets/generated_images/COP30_world_participation_map_1026827b.png";
import justiceImage from "@assets/generated_images/Indigenous_community_climate_justice_3eb95d83.png";
import renewableImage from "@assets/generated_images/Renewable_energy_landscape_bccfb3e2.png";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  
  const cop30Section = useScrollAnimation();
  const metasSection = useScrollAnimation();
  const impactosSection = useScrollAnimation();
  const brasilSection = useScrollAnimation();
  const justicaSection = useScrollAnimation();
  const analiseSection = useScrollAnimation();
  const equipeSection = useScrollAnimation();
  const referenciasSection = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSheetOpen(false);
    }
  };

  const navigationItems = [
    { id: "cop30", label: "COP 30" },
    { id: "metas", label: "Metas" },
    { id: "impactos", label: "Impactos" },
    { id: "brasil", label: "Brasil" },
    { id: "justica", label: "Justiça Climática" },
    { id: "analise", label: "Análise" },
    { id: "equipe", label: "Equipe" },
    { id: "referencias", label: "Referências" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Leaf className="h-8 w-8 text-primary" />
              <div className="hidden md:block">
                <h1 className="text-lg font-semibold text-foreground">COP 30</h1>
                <p className="text-xs text-muted-foreground">PMBA 2025</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  data-testid={`nav-${item.id}`}
                  className="text-sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Sheet */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Navegação
                  </SheetTitle>
                  <SheetDescription>
                    Explore as seções do trabalho
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-2" data-testid="mobile-menu">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => scrollToSection(item.id)}
                      data-testid={`nav-mobile-${item.id}`}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 border-primary/30 text-primary-foreground backdrop-blur-sm" data-testid="badge-pmba">
            Curso de Formação de Soldados PMBA 2025
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-testid="heading-hero">
            Propostas e Impactos da COP 30 na Proteção Ambiental
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
            Uma análise abrangente das principais propostas, metas ambientais e impactos esperados da Conferência das
            Nações Unidas sobre Mudanças Climáticas
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("cop30")}
            className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm rounded-full"
            data-testid="button-explore"
          >
            Explorar a Pesquisa
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* COP 30 Overview */}
      <section 
        id="cop30" 
        ref={cop30Section.ref}
        className={`py-16 md:py-24 lg:py-32 bg-background transition-all duration-1000 ${
          cop30Section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-cop30">O que é a COP 30?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-cop30-description">
              A 30ª Conferência das Partes da Convenção-Quadro das Nações Unidas sobre Mudança do Clima
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Card className="hover-elevate" data-testid="card-cop30-info">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Localização e Data
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Local:</strong> Belém, Pará, Brasil
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Data:</strong> Novembro de 2025
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Significado:</strong> Primeira COP realizada na Amazônia,
                    ressaltando a importância da floresta tropical nas discussões climáticas globais
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-participants">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Participantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Representantes de 198 países signatários da Convenção</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Organizações internacionais (ONU, Banco Mundial, FMI)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>ONGs ambientais e sociedade civil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Setor privado e empresas sustentáveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Comunidades indígenas e tradicionais</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-themes">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Temas Centrais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Redução de Emissões</Badge>
                    <Badge variant="secondary">Transição Energética</Badge>
                    <Badge variant="secondary">Preservação Florestal</Badge>
                    <Badge variant="secondary">Financiamento Climático</Badge>
                    <Badge variant="secondary">Adaptação Climática</Badge>
                    <Badge variant="secondary">Justiça Climática</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <img
                src={worldMapImage}
                alt="Mapa mundial mostrando participantes da COP 30"
                className="rounded-xl shadow-lg w-full"
                data-testid="img-world-map"
              />
              <Card className="bg-primary/5 border-primary/20" data-testid="card-context">
                <CardHeader>
                  <CardTitle className="text-primary">Contexto Histórico</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    A COP 30 acontece em um momento crítico, cinco anos após o Acordo de Paris, quando os países devem
                    apresentar metas mais ambiciosas de redução de emissões.
                  </p>
                  <p>
                    Sediar a conferência na Amazônia brasileira destaca a urgência da preservação florestal e o papel
                    fundamental das florestas tropicais no combate às mudanças climáticas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Goals */}
      <section 
        id="metas" 
        ref={metasSection.ref}
        className={`py-16 md:py-24 lg:py-32 bg-muted/30 transition-all duration-1000 ${
          metasSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-metas">Metas Ambientais Discutidas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-metas-description">
              Principais objetivos e compromissos propostos na COP 30 para enfrentar a crise climática
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-meta-carbon">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Redução de Emissões de Carbono</CardTitle>
                <CardDescription>Meta de neutralidade carbônica</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Compromisso de reduzir as emissões globais de CO₂ em <strong>50% até 2030</strong> e alcançar a
                  neutralidade carbônica até 2050.
                </p>
                <div className="pt-3 border-t">
                  <p className="text-sm font-semibold text-foreground mb-2">Estratégias:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Descarbonização da indústria</li>
                    <li>• Eletrificação do transporte</li>
                    <li>• Captura e armazenamento de carbono</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-meta-energy">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle>Transição Energética</CardTitle>
                <CardDescription>Energia limpa e renovável</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Expandir fontes de energia renovável para que representem <strong>80% da matriz energética global</strong> até 2035.
                </p>
                <div className="pt-3 border-t">
                  <p className="text-sm font-semibold text-foreground mb-2">Fontes prioritárias:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Energia solar e eólica</li>
                    <li>• Hidrogênio verde</li>
                    <li>• Biomassa sustentável</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-meta-forest">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <TreePine className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle>Preservação de Florestas</CardTitle>
                <CardDescription>Desmatamento zero</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Alcançar <strong>desmatamento zero</strong> em florestas tropicais até 2030 e restaurar 350 milhões de hectares degradados.
                </p>
                <div className="pt-3 border-t">
                  <p className="text-sm font-semibold text-foreground mb-2">Ações chave:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fiscalização e monitoramento</li>
                    <li>• Compensação financeira</li>
                    <li>• Reflorestamento nativo</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <img
              src={renewableImage}
              alt="Energia renovável - painéis solares e turbinas eólicas"
              className="rounded-xl shadow-lg w-full max-h-96 object-cover"
              data-testid="img-renewable"
            />
          </div>
        </div>
      </section>

      {/* Impact Analysis */}
      <section 
        id="impactos" 
        ref={impactosSection.ref}
        className={`py-16 md:py-24 lg:py-32 bg-background transition-all duration-1000 ${
          impactosSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-impactos">Análise de Impactos Esperados</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-impactos-description">
              Avaliação multidimensional dos efeitos das propostas da COP 30
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-elevate" data-testid="card-impact-environment">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Impactos Ambientais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-green-600">✓</span> Impactos Positivos
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                    <li>• Redução do aquecimento global</li>
                    <li>• Preservação da biodiversidade</li>
                    <li>• Melhoria da qualidade do ar</li>
                    <li>• Proteção de ecossistemas críticos</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resultados Esperados</h4>
                  <p className="text-sm text-muted-foreground">
                    Limitação do aumento da temperatura global a 1,5°C, evitando eventos climáticos extremos e
                    preservando habitats naturais essenciais.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-impact-economy">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <Factory className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle>Impactos Econômicos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-green-600">✓</span> Oportunidades
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                    <li>• Crescimento da economia verde</li>
                    <li>• Criação de empregos sustentáveis</li>
                    <li>• Inovação tecnológica</li>
                    <li>• Mercado de carbono</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Desafios</h4>
                  <p className="text-sm text-muted-foreground">
                    Necessidade de investimentos massivos na transição energética e possível resistência de setores
                    dependentes de combustíveis fósseis.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-impact-communities">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle>Impactos nas Comunidades Locais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Comunidades Tradicionais</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Reconhecimento dos direitos de povos indígenas e comunidades tradicionais como guardiões da
                    floresta.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Valorização do conhecimento tradicional</li>
                    <li>• Compensação por serviços ambientais</li>
                    <li>• Participação em decisões climáticas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-impact-policy">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle>Impactos em Políticas Públicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Legislação Ambiental</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fortalecimento de marcos regulatórios para proteção ambiental e desenvolvimento sustentável.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Leis mais rigorosas contra desmatamento</li>
                    <li>• Incentivos fiscais para energia limpa</li>
                    <li>• Programas de educação ambiental</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brazil and Amazon */}
      <section 
        id="brasil" 
        ref={brasilSection.ref}
        className={`py-16 md:py-24 lg:py-32 bg-muted/30 transition-all duration-1000 ${
          brasilSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-brasil">Brasil e Amazônia</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-brasil-description">
              O papel estratégico do Brasil e da Floresta Amazônica nas propostas da COP 30
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                src={amazonImage}
                alt="Vista aérea da Floresta Amazônica"
                className="rounded-xl shadow-lg w-full"
                data-testid="img-amazon"
              />
            </div>

            <div className="space-y-6">
              <Card className="hover-elevate" data-testid="card-amazon-importance">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Importância da Amazônia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    A Floresta Amazônica é o maior bioma tropical do mundo, abrigando cerca de{" "}
                    <strong className="text-foreground">10% de toda a biodiversidade do planeta</strong>.
                  </p>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Funções ecológicas vitais:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Regulação climática:</strong> Absorve 2 bilhões de toneladas de CO₂ por ano</li>
                      <li>• <strong>Ciclo hidrológico:</strong> Produz "rios voadores" que irrigam a América do Sul</li>
                      <li>• <strong>Biodiversidade:</strong> Habitat de milhões de espécies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-brazil-actions">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Ações de Proteção no Brasil
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Políticas Nacionais</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Plano de Prevenção e Controle do Desmatamento na Amazônia (PPCDAm)</li>
                      <li>• Sistema de monitoramento por satélite (PRODES e DETER)</li>
                      <li>• Unidades de conservação e terras indígenas demarcadas</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Compromissos para COP 30</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Desmatamento zero até 2030</li>
                      <li>• Restauração de 12 milhões de hectares</li>
                      <li>• Aumento da fiscalização e combate ao crime ambiental</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20" data-testid="card-brazil-challenge">
                <CardHeader>
                  <CardTitle className="text-primary">Desafios e Oportunidades</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-3">
                  <p>
                    <strong className="text-foreground">Desafio:</strong> Equilibrar desenvolvimento econômico com
                    preservação ambiental em uma região com altos índices de pobreza.
                  </p>
                  <p>
                    <strong className="text-foreground">Oportunidade:</strong> Liderar a economia verde global através
                    da bioeconomia, turismo sustentável e créditos de carbono.
                  </p>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Dados da Amazônia Brasileira</h4>
                    <ul className="text-sm space-y-1">
                      <li data-testid="stat-amazon-area">• <strong>5,5 milhões km²</strong> - Área total da Amazônia Brasileira (60% do território nacional)</li>
                      <li data-testid="stat-amazon-carbon">• <strong>150-200 bilhões de toneladas</strong> - Carbono armazenado na biomassa</li>
                      <li data-testid="stat-amazon-biodiversity">• <strong>40.000+ espécies</strong> de plantas catalogadas</li>
                      <li data-testid="stat-amazon-rivers">• <strong>20%</strong> da água doce mundial em seus rios</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Justice */}
      <section
        id="justica"
        ref={justicaSection.ref}
        className={`py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden transition-all duration-1000 ${
          justicaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: `url(${justiceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" data-testid="heading-justica">Justiça Climática</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto" data-testid="text-justica-description">
              A importância da equidade e inclusão no enfrentamento da crise climática
            </p>
          </div>

          <div className="mb-8 p-8 bg-background/10 backdrop-blur-md rounded-xl border border-white/20" data-testid="quote-climate-justice">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-white italic mb-4">
                "A crise climática não afeta a todos igualmente. Aqueles que menos contribuíram para o problema são os
                que mais sofrem suas consequências."
              </p>
              <footer className="text-white/80 text-sm">
                — Princípio fundamental da Justiça Climática
              </footer>
            </blockquote>
          </div>

          <Card className="bg-background/95 backdrop-blur-sm hover-elevate" data-testid="card-climate-justice">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                Justiça Climática no Contexto Brasileiro
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">O que é Justiça Climática?</h3>
                <p className="text-muted-foreground">
                  A justiça climática reconhece que as mudanças climáticas afetam desproporcionalmente as populações
                  mais vulneráveis, que historicamente contribuíram menos para o problema. Busca garantir que as
                  soluções climáticas sejam equitativas e não perpetuem desigualdades sociais.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Contexto Brasileiro</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Grupos Vulneráveis</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Povos indígenas e quilombolas</li>
                      <li>• Comunidades ribeirinhas</li>
                      <li>• População de baixa renda em áreas de risco</li>
                      <li>• Agricultores familiares</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Impactos Desproporcionais</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Enchentes e deslizamentos em periferias</li>
                      <li>• Secas afetando pequenos produtores</li>
                      <li>• Perda de territórios tradicionais</li>
                      <li>• Migração climática forçada</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Princípios da Justiça Climática na COP 30</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Responsabilidades Comuns mas Diferenciadas</h4>
                      <p className="text-sm text-muted-foreground">
                        Países desenvolvidos devem assumir maior responsabilidade histórica pelas emissões e apoiar
                        nações em desenvolvimento na transição verde.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Participação e Representação</h4>
                      <p className="text-sm text-muted-foreground">
                        Garantir que comunidades afetadas tenham voz nas decisões climáticas, especialmente povos
                        indígenas como guardiões da biodiversidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Transição Justa</h4>
                      <p className="text-sm text-muted-foreground">
                        Assegurar que a mudança para economia verde não deixe trabalhadores e comunidades dependentes
                        de setores poluentes sem alternativas dignas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Financiamento Climático Equitativo</h4>
                      <p className="text-sm text-muted-foreground">
                        Recursos para adaptação e mitigação devem priorizar as populações mais vulneráveis,
                        reconhecendo suas necessidades específicas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-primary/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Por que é crucial?</h3>
                <p className="text-muted-foreground">
                  No Brasil, a justiça climática é fundamental porque as comunidades que menos contribuíram para as
                  mudanças climáticas - povos indígenas, quilombolas, ribeirinhos - são as mais impactadas e também as
                  que mais protegem os ecossistemas. Reconhecer seus direitos e conhecimentos é essencial para
                  soluções climáticas efetivas e éticas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Critical Analysis */}
      <section 
        id="analise" 
        ref={analiseSection.ref}
        className={`py-16 md:py-24 lg:py-32 bg-background transition-all duration-1000 ${
          analiseSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-analise">Análise Crítica do Grupo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-analise-description">
              Reflexões sobre o papel da COP 30 na luta contra as mudanças climáticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-elevate" data-testid="card-analysis-positive">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-500">
                  <span className="text-2xl">✓</span>
                  Aspectos Positivos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mobilização Global</h4>
                  <p className="text-sm text-muted-foreground">
                    A COP 30 representa um esforço coletivo sem precedentes, reunindo nações, organizações e sociedade
                    civil em torno de objetivos comuns de preservação ambiental.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Visibilidade da Amazônia</h4>
                  <p className="text-sm text-muted-foreground">
                    Sediar a conferência em Belém coloca a Amazônia no centro das discussões globais, destacando sua
                    importância estratégica e fortalecendo a posição do Brasil como protagonista ambiental.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Economia Verde</h4>
                  <p className="text-sm text-muted-foreground">
                    As metas propostas podem impulsionar investimentos em tecnologias limpas, criando oportunidades
                    econômicas sustentáveis e novos empregos verdes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-analysis-challenges">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-500">
                  <span className="text-2xl">!</span>
                  Desafios e Preocupações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Implementação Efetiva</h4>
                  <p className="text-sm text-muted-foreground">
                    Historicamente, muitos compromissos assumidos em COPs anteriores não foram plenamente cumpridos. É
                    necessário criar mecanismos rigorosos de monitoramento e responsabilização.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Financiamento Insuficiente</h4>
                  <p className="text-sm text-muted-foreground">
                    Os países desenvolvidos ainda não cumpriram a promessa de destinar US$ 100 bilhões anuais para
                    ações climáticas em nações em desenvolvimento, comprometendo a viabilidade das metas.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Interesses Conflitantes</h4>
                  <p className="text-sm text-muted-foreground">
                    A pressão de lobbies de combustíveis fósseis e setores econômicos tradicionais pode enfraquecer os
                    acordos, exigindo vigilância da sociedade civil.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 space-y-8">
            <Card className="bg-muted/30" data-testid="card-team-perspectives">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Perspectivas da Equipe
                </CardTitle>
                <CardDescription>Reflexões dos integrantes sobre a COP 30 e proteção ambiental</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2" data-testid="perspective-1">
                  <h4 className="font-semibold text-foreground">Perspectiva de Segurança Pública</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Como futuros policiais militares, entendemos que a degradação ambiental está diretamente ligada à
                    segurança pública. Conflitos por recursos naturais, deslocamento de populações e crimes
                    ambientais são desafios crescentes que exigem preparo e ação coordenada das forças de segurança.
                  </p>
                </div>
                <div className="space-y-2" data-testid="perspective-2">
                  <h4 className="font-semibold text-foreground">Responsabilidade Regional</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A Bahia, com seus diversos biomas incluindo Mata Atlântica, Cerrado e Caatinga, tem papel
                    fundamental na preservação ambiental. As propostas da COP 30 nos chamam a agir localmente,
                    protegendo nossas riquezas naturais e comunidades tradicionais.
                  </p>
                </div>
                <div className="space-y-2" data-testid="perspective-3">
                  <h4 className="font-semibold text-foreground">Urgência da Ação</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Os dados científicos são claros: não há tempo a perder. A COP 30 precisa resultar em ações
                    concretas e mensuráveis, não apenas em declarações. Como cidadãos e agentes públicos em formação,
                    temos o dever de cobrar e participar ativamente desse processo.
                  </p>
                </div>
                <div className="space-y-2" data-testid="perspective-4">
                  <h4 className="font-semibold text-foreground">Educação e Conscientização</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O papel da PMBA vai além da fiscalização. Inclui educar e conscientizar a população sobre a
                    importância da preservação ambiental. A COP 30 oferece uma oportunidade única de ampliar essa
                    conscientização em escala global.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30" data-testid="card-final-reflection">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Reflexão Final Coletiva
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed" data-testid="text-reflection-1">
                  A COP 30 representa um momento decisivo na luta contra as mudanças climáticas. Sediar a conferência na
                  Amazônia brasileira não é apenas simbólico, mas estratégico, pois coloca em evidência a floresta que é
                  fundamental para o equilíbrio climático global.
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-reflection-2">
                  Para que as propostas saiam do papel, é essencial que haja comprometimento genuíno dos países
                  signatários, especialmente das nações mais desenvolvidas, que devem liderar pelo exemplo e apoiar
                  financeiramente os países em desenvolvimento. A participação da sociedade civil, incluindo comunidades
                  indígenas e tradicionais, é crucial para garantir que as decisões sejam justas e efetivas.
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-reflection-3">
                  Como futuros profissionais da Polícia Militar da Bahia, reconhecemos que a proteção ambiental não é
                  apenas uma questão ecológica, mas uma questão de segurança pública, justiça social e futuro da
                  humanidade. A COP 30 pode ser um ponto de virada, mas apenas se for acompanhada de ações concretas,
                  fiscalização rigorosa e comprometimento de toda a sociedade.
                </p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary" data-testid="quote-final">
                  <p className="text-foreground font-semibold italic">
                    "A crise climática exige que passemos da retórica à ação. A COP 30 é uma oportunidade única, mas
                    cabe a todos nós - governos, empresas, sociedade civil e cidadãos - transformar promessas em
                    realidade."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Credits */}
      <section 
        id="equipe" 
        ref={equipeSection.ref}
        className={`py-16 md:py-24 lg:py-32 bg-muted/30 transition-all duration-1000 ${
          equipeSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-equipe">Equipe</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-course">
              Curso de Formação de Soldados PMBA 2025
            </p>
            <p className="text-muted-foreground" data-testid="text-subject">
              Fundamentos de Proteção Ambiental
            </p>
          </div>

          <Card className="mb-8 bg-primary/5 border-primary/20" data-testid="card-instructor">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl" data-testid="text-instructor-title">Instrutora</CardTitle>
              <CardDescription className="text-lg" data-testid="text-instructor-name">CABO PM DUTRA</CardDescription>
            </CardHeader>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "AL SD PM MAURO", number: "27" },
              { name: "AL SD PM LOPES", number: "37" },
              { name: "AL SD PM DA SILVA", number: "41" },
              { name: "AL SD PM MARLON", number: "42" },
              { name: "AL SD PM COUTO", number: "48" },
              { name: "AL SD PM MARCIO", number: "49" },
              { name: "AL SD PM WELLINGTON", number: "50" },
            ].map((member) => (
              <Card key={member.number} className="hover-elevate text-center" data-testid={`card-member-${member.number}`}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>Número: {member.number}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section 
        id="referencias" 
        ref={referenciasSection.ref}
        className={`py-16 md:py-24 lg:py-32 bg-background transition-all duration-1000 ${
          referenciasSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-referencias">Referências</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-referencias-description">
              Fontes consultadas para elaboração desta pesquisa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-elevate" data-testid="card-references-international">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Organizações Internacionais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="pb-2 border-b">
                    <strong className="text-foreground">UNFCCC</strong> - Convenção-Quadro das Nações Unidas sobre
                    Mudança do Clima
                    <br />
                    <a href="https://unfccc.int" className="text-primary hover:underline" data-testid="link-unfccc">
                      unfccc.int
                    </a>
                  </li>
                  <li className="pb-2 border-b">
                    <strong className="text-foreground">IPCC</strong> - Painel Intergovernamental sobre Mudanças
                    Climáticas
                    <br />
                    <a href="https://www.ipcc.ch" className="text-primary hover:underline" data-testid="link-ipcc">
                      ipcc.ch
                    </a>
                  </li>
                  <li className="pb-2">
                    <strong className="text-foreground">ONU Meio Ambiente</strong> - Programa das Nações Unidas para o
                    Meio Ambiente
                    <br />
                    <a href="https://www.unep.org" className="text-primary hover:underline" data-testid="link-unep">
                      unep.org
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-references-national">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Instituições Brasileiras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="pb-2 border-b">
                    <strong className="text-foreground">Ministério do Meio Ambiente</strong> - Políticas ambientais
                    brasileiras
                    <br />
                    <a href="https://www.gov.br/mma" className="text-primary hover:underline" data-testid="link-mma">
                      gov.br/mma
                    </a>
                  </li>
                  <li className="pb-2 border-b">
                    <strong className="text-foreground">INPE</strong> - Instituto Nacional de Pesquisas Espaciais
                    (Monitoramento da Amazônia)
                    <br />
                    <a href="https://www.inpe.br" className="text-primary hover:underline" data-testid="link-inpe">
                      inpe.br
                    </a>
                  </li>
                  <li className="pb-2">
                    <strong className="text-foreground">IBAMA</strong> - Instituto Brasileiro do Meio Ambiente e dos
                    Recursos Naturais Renováveis
                    <br />
                    <a href="https://www.ibama.gov.br" className="text-primary hover:underline" data-testid="link-ibama">
                      ibama.gov.br
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-references-research">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Artigos e Pesquisas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="pb-2 border-b">
                    <strong className="text-foreground">Nature Climate Change</strong> - Revistas científicas sobre
                    mudanças climáticas
                  </li>
                  <li className="pb-2 border-b">
                    <strong className="text-foreground">Science</strong> - Publicações sobre biodiversidade e clima
                  </li>
                  <li className="pb-2">
                    <strong className="text-foreground">Observatório do Clima</strong> - Análises sobre política
                    climática brasileira
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-references-media">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Notícias e Mídia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="pb-2 border-b">
                    <strong className="text-foreground">BBC News Brasil</strong> - Cobertura de eventos climáticos
                  </li>
                  <li className="pb-2 border-b">
                    <strong className="text-foreground">G1 Natureza</strong> - Notícias ambientais nacionais
                  </li>
                  <li className="pb-2">
                    <strong className="text-foreground">The Guardian Environment</strong> - Notícias climáticas
                    internacionais
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-muted/30" data-testid="card-access-note">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Nota:</strong> Todas as fontes foram consultadas entre outubro e
                novembro de 2024. Os links e informações estavam atualizados no momento da pesquisa.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground" data-testid="text-footer-title">COP 30 - Proteção Ambiental</span>
            </div>
            <p className="text-muted-foreground" data-testid="text-footer-academic">
              Trabalho Acadêmico - Curso de Formação de Soldados PMBA 2025
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-subject">
              Fundamentos de Proteção Ambiental | Instrutora: CABO PM DUTRA
            </p>
            <Separator className="max-w-xs mx-auto my-4" />
            <p className="text-xs text-muted-foreground" data-testid="text-footer-copyright">
              © 2024 - Polícia Militar da Bahia. Desenvolvido para fins educacionais.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
