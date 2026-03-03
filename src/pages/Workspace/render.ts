interface IRenderer {
    resize(): void;
}

export class Renderer implements IRenderer {
    canvas: HTMLCanvasElement;
    ctx!: CanvasRenderingContext2D | null;
    width: number = 0;
    height: number = 0;
    private dpr = window.devicePixelRatio || 1;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }
    resize(): void {
        throw new Error("Method not implemented.");
    }

    init() {
        const ctx = this.canvas.getContext('2d');
        if (!ctx) {
            console.error('Canvas context 初始化失败');
            return;
        }
        this.ctx = ctx;
        this.ctx.scale(this.dpr, this.dpr);
        this.resize();
    }

    drawRect(x: number, y: number, width: number, height: number, fillColor = '#165DFF') {
        if (!this.ctx) return;
        this.ctx.fillStyle = fillColor;
        // 比如传 width=100 → 视觉上矩形宽 100px；传 height=50 → 高 50px
        this.ctx.fillRect(x, y, width, height);
    }

    drawLine(x1: number, y1: number, x2: number, y2: number, lineWidth = 2, strokeColor = '#F53F3F') {
        if (!this.ctx) return;
        this.ctx.strokeStyle = strokeColor;
        // 比如 lineWidth=2 → 视觉上线条粗 2px
        this.ctx.lineWidth = lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

}

export class ServiceRenderer extends Renderer {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
    }
    resize() {
        const { width, height } = this.canvas.getBoundingClientRect() || { width: 800, height: 600 };
        this.width = width;
        this.height = height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
}

export class BackgroundRenderer extends Renderer {
    private gridConfig = {
        dotSize: 1,
        spacing: 30,
        dotColor: '#cbc8c8ae',
        bgColor: '#ffffff'
    };
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
    }
    renderBackground() {
        const { ctx, gridConfig } = this;
        if (!ctx) return;
        const { dotSize, spacing, dotColor, bgColor } = gridConfig;
        // 清除画布并填充背景色
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, this.width, this.height);

        // 设置点的颜色
        ctx.fillStyle = dotColor;

        // 开启抗锯齿
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // 使用圆点绘制，每个点单独绘制以获得更好的效果
        for (let x = spacing; x < this.width; x += spacing) {
            for (let y = spacing; y < this.height; y += spacing) {
                // 绘制实心圆点
                ctx.beginPath();
                ctx.arc(x, y, dotSize, 0, Math.PI * 2);
                ctx.fill();
                // 可选：添加轻微阴影使点看起来更立体
                ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
                ctx.shadowBlur = 1;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
            }
        }
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
    }

    resize() {
        const { width, height } = this.canvas.getBoundingClientRect()
        this.width = width;
        this.height = height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.renderBackground();
    }
}