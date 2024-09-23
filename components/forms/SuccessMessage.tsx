import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SuccessMessage() {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="border-black bg-black/90 p-16 text-white lg:p-24">
        <DialogHeader>
          <DialogTitle
            className={`text-center text-xl font-medium md:mb-3 lg:mb-6 lg:text-3xl`}
          >
            <div className="flex flex-col items-center gap-2">
              <p>¡GRACIAS!</p>
              <p className="text-base text-gray-300">
                NOS COMUNICAREMOS CONTIGO
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
