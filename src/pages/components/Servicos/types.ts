export interface IServico {
  id: number;
  title: string;
  fullText: string;
  previewText: string;

  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
