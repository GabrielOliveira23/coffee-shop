import { toast } from 'sonner'

type ToastType = 'error' | 'success' | 'warning'

function showToast(type: ToastType, message: string) {
  const toastContent = <h2 className="text-sm">{message}</h2>
  switch (type) {
    case 'error':
      toast.error(toastContent)
      break
    case 'success':
      toast.success(toastContent)
      break
    case 'warning':
      toast.warning(toastContent)
      break
    default:
      throw new Error('Invalid toast type')
  }
}

export function toastError(message = 'Erro desconhecido!') {
  showToast('error', message)
}

export function toastSuccess(message = 'Sucesso!') {
  showToast('success', message)
}

export function toastWarning(message = 'Aviso, algo errado!') {
  showToast('warning', message)
}
