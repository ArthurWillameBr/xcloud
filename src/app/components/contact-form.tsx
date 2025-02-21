"use client";

import { Mail, Phone, Loader2 } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { cn } from "@/app/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Turnstile } from "next-turnstile";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMessage } from "../contexts/message-context";
import Textarea from "./ui/textarea";

const contactFormSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  tel: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Número de telefone inválido"),
  subject: z.string().min(1, "O assunto é obrigatório"),
  message: z.string().min(1, "A mensagem é obrigatória"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { message, setMessage } = useMessage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const formatPhoneNumber = (value: string) => {
    const cleaned = ("" + value).replace(/\D/g, "");
    if (cleaned.length > 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
        7,
        11
      )}`;
    } else if (cleaned.length > 2) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    } else if (cleaned.length > 0) {
      return `(${cleaned}`;
    }
    return cleaned;
  };

  useEffect(() => {
    setValue("message", message);
  }, [setValue, message]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setValue("tel", formattedPhone);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    if (turnstileStatus !== "success" || !turnstileToken) {
      toast.error("Por favor, complete a validação do Turnstile.");
      setIsLoading(false);
      return;
    }

    console.log("Form Data:", data, turnstileToken);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token: turnstileToken }),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!");
        formRef.current?.reset();
      } else {
        toast.error("Erro ao enviar mensagem.");
      }
    } catch (err) {
      toast.error("Ocorreu um erro. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full p-8 shadow-lg bg-zinc-900"
      id="contato"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 md:pt-10 md:pr-10">
          <h2 className="font-bold text-3xl text-neutral-200 relative inline-block">
            CONTATE-NOS
            <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-red-500"></span>
          </h2>
          <p className=" text-sm max-w-sm text-neutral-300">
            Entre em contato conosco para mais informações.
          </p>
          <div className="space-y-4">
            <InfoItem
              icon={<Mail className="w-5 h-5 text-red-500" />}
              title="E-mail"
            >
              contato@xcloud.tec.br
            </InfoItem>
            <InfoItem
              icon={<Phone className="w-5 h-5 text-red-500" />}
              title="Telefone"
            >
              +55 85 98762-8622
            </InfoItem>
          </div>
        </div>

        <form
          ref={formRef}
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <LabelInputContainer>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Endereço de e-mail</Label>
            <Input
              id="email"
              placeholder="Insira seu e-mail"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="tel">Número de Telefone</Label>
            <Input
              id="tel"
              placeholder="(XX) XXXXX-XXXX"
              type="tel"
              {...register("tel")}
              onChange={handlePhoneChange}
            />
            {errors.tel && (
              <span className="text-red-500 text-sm">{errors.tel.message}</span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="subject">Assunto</Label>
            <Input
              id="subject"
              placeholder="Qual é o assunto?"
              type="text"
              {...register("subject")}
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject.message}
              </span>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              value={message}
              id="message"
              placeholder="Escreva sua mensagem"
              {...register("message", {
                onChange: (e) => setMessage(e.target.value),
              })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </LabelInputContainer>
          <div className="flex flex-col items-center">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              retry="auto"
              refreshExpired="auto"
              onError={() => setTurnstileStatus("error")}
              onExpire={() => setTurnstileStatus("expired")}
              onLoad={() => setTurnstileStatus("required")}
              onVerify={(token) => {
                console.log("Turnstile token recebido:", token);
                setTurnstileStatus("success");
                setTurnstileToken(token);
                console.log("Turnstile token:", token);
              }}
            />
          </div>
          <button
            disabled={isLoading}
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center"
            type="submit"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Enviar Mensagem"
            )}
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const InfoItem = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-neutral-200">{title}</h3>
        <p className=" text-sm text-neutral-300">{children}</p>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
