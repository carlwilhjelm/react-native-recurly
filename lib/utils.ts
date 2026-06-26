import dayjs from 'dayjs';

export const formatCurrency = (value: number, currency: string = 'USD') => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (error) {
    console.error('Error formatting currency:', error);
    // Fallback: simple formatting
    return `${currency} ${value.toFixed(2)}`;
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "No Date Provided";
  const parsedDate = dayjs(value);
  return parsedDate.format('YYYY-MM-DD');
}

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "No Status Provided";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const tabs_icon = "size-12 items-center justify-center";
export const tabs_pill = "size-12 items-center justify-center rounded-full bg-transparent";
export const tabs_active = "bg-accent";
export const tabs_glyph = "size-6";
export const home_header = "mb-2.5 flex-row items-center justify-between";
export const home_user = "flex-row items-center";
export const home_avatar = "size-16 rounded-full";
export const home_user_name = 'ml-4 text-2xl font-bold text-primary';
export const home_add_icon = "size-12";
export const home_balance_card = "my-2.5 min-h-50 justify-between gap-5 rounded-bl-4xl rounded-tr-4xl bg-accent p-6";
export const home_balance_label = "text-xl font-semibold text-white/80";
export const home_balance_row = "flex-row items-center justify-between";
export const home_balance_amount = "text-4xl font-extrabold text-white";
export const home_balance_date = "text-xl font-medium text-white";
export const list_head = "my-5 flex-row items-center justify-between";
export const list_title = "text-2xl font-bold text-primary";
export const list_action = "rounded-full border border-black/20 px-4 py-1";
export const list_action_text = "text-lg font-semibold text-primary";
export const upcoming_card = "mr-4 w-44 rounded-2xl border border-black/10 bg-background p-4";
export const upcoming_row = "flex-row items-center gap-3";
export const upcoming_icon = "size-14";
export const upcoming_price = "text-lg font-bold text-primary";
export const upcoming_meta = "text-sm font-semibold text-muted-foreground";
export const upcoming_name = "mt-2 text-lg font-bold text-primary";
export const sub_card = "rounded-2xl border border-border p-4";
export const sub_card_expanded = "bg-subscription";
export const sub_head = "flex-row items-center py-2";
export const sub_main = "min-w-0 flex-1 flex-row items-center gap-3";
export const sub_icon = "size-16 rounded-lg";
export const sub_copy = "min-w-0 flex-1";
export const sub_title = "mb-1 text-lg font-bold text-primary";
export const sub_meta = "text-sm font-semibold text-muted-foreground";
export const sub_price_box = "ml-3 shrink-0 items-end";
export const sub_price = "mb-1 text-lg font-bold text-primary";
export const sub_billing = "text-sm font-medium text-muted-foreground";
export const sub_body = "mt-6 gap-4";
export const sub_details = "gap-6";
export const sub_row = "flex-row items-center justify-between gap-3";
export const sub_row_copy = "min-w-0 flex-1 flex-row items-center gap-2";
export const sub_label = "shrink-0 text-base font-medium text-muted-foreground";
export const sub_value = "flex-1 font-bold text-primary";
export const sub_cancel = "mt-2 items-center rounded-full bg-primary py-4";
export const sub_cancel_disabled = "bg-primary/35";
export const sub_cancel_text = "font-bold text-background";
export const home_empty_state = "py-4 text-sm font-medium text-black/60";
export const auth_safe_area = "flex-1 bg-background";
export const auth_screen = "flex-1 bg-background";
export const auth_scroll = "flex-1";
export const auth_content = "grow px-5 pb-10 pt-8";
export const auth_brand_block = "mt-2 items-center";
export const auth_logo_wrap = "mb-7 flex-row items-center gap-3";
export const auth_logo_mark = "relative size-14 items-center justify-center rounded-2xl bg-accent";
export const auth_logo_mark_text = "text-2xl font-extrabold text-background";
export const auth_wordmark = "text-3xl font-extrabold text-primary";
export const auth_wordmark_sub = "-mt-1 text-xs font-semibold uppercase tracking-[1px] text-muted-foreground";
export const auth_title = "text-3xl font-bold text-primary";
export const auth_subtitle = "mt-2 max-w-[320px] text-center text-base font-medium text-muted-foreground";
export const auth_card = "mt-8 rounded-3xl border border-border bg-card p-5";
export const auth_form = "gap-4";
export const auth_field = "gap-2";
export const auth_label = "text-sm font-semibold text-primary";
export const auth_input = "rounded-2xl border border-border bg-background px-4 py-4 text-base font-medium text-primary";
export const auth_input_error = "border-destructive";
export const auth_error = "text-xs font-medium text-destructive";
export const auth_helper = "text-sm font-medium text-muted-foreground";
export const auth_button = "mt-1 items-center rounded-2xl bg-accent py-4";
export const auth_button_disabled = "bg-accent/45";
export const auth_button_text = "text-base font-bold text-primary";
export const auth_secondary_button = "items-center rounded-2xl border border-accent/30 bg-accent/10 py-3";
export const auth_secondary_button_text = "text-sm font-semibold text-accent";
export const auth_divider_row = "my-4 flex-row items-center gap-3";
export const auth_divider_line = "h-px flex-1 bg-border";
export const auth_divider_text = "text-[11px] font-semibold uppercase tracking-[1px] text-muted-foreground";
export const auth_link_row = "mt-5 flex-row items-center justify-center gap-1";
export const auth_link_copy = "text-sm font-medium text-muted-foreground";
export const auth_link = "text-sm font-bold text-accent";
export const modal_overlay = "flex-1 bg-black/50";
export const modal_container = "mt-auto max-h-[85%] rounded-t-3xl bg-background";
export const modal_header = "flex-row items-center justify-between border-b border-border px-5 py-4";
export const modal_title = "text-xl font-bold text-primary";
export const modal_close = "size-8 items-center justify-center rounded-full bg-muted";
export const modal_close_text = "text-lg font-bold text-primary";
export const modal_body = "gap-5 p-5";
export const picker_row = "flex-row gap-3";
export const picker_option = "flex-1 items-center rounded-2xl border border-border bg-background py-3";
export const picker_option_active = "border-accent bg-accent/10";
export const picker_option_text = "text-sm font-semibold text-muted-foreground";
export const picker_option_text_active = "text-accent";
export const category_scroll = "flex-row flex-wrap gap-2";
export const category_chip = "rounded-full border border-border bg-background px-4 py-2";
export const category_chip_active = "border-accent bg-accent/10";
export const category_chip_text = "text-sm font-semibold text-muted-foreground";
export const category_chip_text_active = "text-accent";

